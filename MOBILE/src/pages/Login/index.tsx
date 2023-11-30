import { View, Text, StyleSheet, TouchableOpacity, Alert, TextInput, Keyboard } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { PrimaryColor, TertiaryColor } from "../../styles/colors";
import GradientText from "../../components/TextGradient";
import Button from "../../components/Button";
// import TextInput from "../../components/TextInput";
import { StackTypes } from "../../routes/app.router";
import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from 'expo-navigation-bar';
import { useAuth } from "../../hooks/AuthContext";
import InputLabel from "../../components/InputLabel";
import { DefaultStyles } from "../../styles/defaultStyles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { BASE_URL } from "../../consts";
import * as LocalAuthentication from "expo-local-authentication";



export default function Login() {

    const navigation = useNavigation<StackTypes>();
    const { login, authState } = useAuth();

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState(authState?.user?.email);
    const [password, setPassword] = useState('');
    const [localAuthAvelable, setLocalAuthAvelable] = useState(false);
    const [showFooter, setShowFooter] = useState(true);


    const hadleLogin = async () => {
        setIsLoading(true);
        Keyboard.dismiss()
        const loginResponse = await login(email, password);
        setIsLoading(false);
        if (loginResponse.success) {
            navigation.navigate('Resume');
        } else {
            errorAlert();
        }
    }

    const verifyRefreshToken = async () => {
        const hasDigitalPrint = await LocalAuthentication.isEnrolledAsync();
        const compatible = await LocalAuthentication.hasHardwareAsync();
        const types = await LocalAuthentication.supportedAuthenticationTypesAsync();

        if (authState.refreshToken && hasDigitalPrint && compatible && types.includes(1)) {
            axios.post(`${BASE_URL}/verify-refresh-token`, { refresh_token: authState.refreshToken })
                .then((resp) => {
                    // console.log('resposta', JSON.stringify(resp.data, null, 2));
                    if (resp.data.success) {
                        setLocalAuthAvelable(true);
                    }
                }).catch((error) => {
                    // console.log('Login por bionetria indiponível');
                    // console.log('meu refresh token = ' + authState.refreshToken);
                })
        }
    }


    async function loginWithDigitalPrint() {
        const auth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autenticação',
            fallbackLabel: 'Biometria não reconhecida'
        })
        if (auth.success) {
            navigation.navigate('Resume');
        }
    }


    const getLastEmail = async () => {
        const last_email_login = await AsyncStorage.getItem('last_email_login');
        setEmail(last_email_login ? last_email_login : '');
    }


    useEffect(() => {
        setPassword('')
        getLastEmail();
        verifyRefreshToken();
    }, [authState])

    useEffect(() => {
        Keyboard.addListener('keyboardDidHide', () => {
            setShowFooter(true);
        });
        Keyboard.addListener('keyboardDidShow', () => {
            setShowFooter(false);
        });

        getLastEmail();
        verifyRefreshToken();
    }, [])


    const errorAlert = (message: string = 'Não foi possível realizar o login') => {
        return Alert.alert('Atenção', message, [
            {
                text: 'Ask me later',
                // onPress: () => console.log('Ask me later pressed'),
            },
            {
                text: 'Cancel',
                style: 'cancel',
                // onPress: () => console.log('Cancel Pressed'),
            },
            {
                text: 'OK',
                // onPress: () => console.log('OK Pressed')
            },
        ])
    };


    return (
        <View style={styles.container} >
            <StatusBar backgroundColor="white" style="dark" />

            <View style={styles.containerHeader} >
                <GradientText style={{ fontSize: 34, fontWeight: '900', marginTop: 24 }} >SOLUTIONS</GradientText>
            </View>

            <View style={styles.containerForm}>
                <InputLabel>E-mail</InputLabel>
                <TextInput keyboardType="email-address" style={DefaultStyles.inputText} value={email} onChangeText={setEmail} inputMode="email" placeholder="Digite um e-mail" />
                <InputLabel>Senha</InputLabel>
                <TextInput style={DefaultStyles.inputText} value={password} onChangeText={setPassword} secureTextEntry placeholder="Digite uma senha" />

                {/* <TouchableOpacity onPress={() => { navigation.navigate('Resume') }}>
                    <LinearGradient
                        colors={['rgb(71, 36, 164)', 'rgb(102, 58, 193)', 'rgb(139, 33, 202)']}
                        style={styles.button}
                        start={{ x: 0, y: 0.5 }}
                    >
                        <Text style={styles.buttonText}>Entrar</Text>
                    </LinearGradient>
                </TouchableOpacity> */}

                <TouchableOpacity style={{ marginTop: 22 }} activeOpacity={.75} onPress={hadleLogin}>
                    <Button loading={isLoading}>
                        Entrar
                    </Button>
                </TouchableOpacity>

                {localAuthAvelable && showFooter ?
                    <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <TouchableOpacity onPress={loginWithDigitalPrint} style={{ width: 34 }}>
                            <Ionicons name="finger-print-outline" size={34} color="black" />
                        </TouchableOpacity>
                    </View>
                    : ''}


                {showFooter ?
                    <TouchableOpacity style={{ marginTop: 14, alignSelf: "center", position: 'absolute', bottom: 8 }} >
                        <Text style={{ color: '#A1A1A1' }} >Não possui uma conta? Cadastre-se</Text>
                    </TouchableOpacity>
                    :
                    ''
                }


            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    containerHeader: {
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerForm: {
        height: '50%',
        backgroundColor: '#FFF',
        flex: 2,
        justifyContent: 'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 16
    }
})