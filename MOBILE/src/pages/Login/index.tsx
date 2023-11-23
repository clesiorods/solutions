import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native"

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { PrimaryColor, TertiaryColor } from "../../components/Styles/colors";
import GradientText from "../../components/TextGradient";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import { StackTypes } from "../../routes/app.router";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from 'expo-navigation-bar';


export default function Login() {
    const navigation = useNavigation<StackTypes>();

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        setIsLoading(true);
        setTimeout(() => {
        setIsLoading(false);
            navigation.navigate('Resume');
        }, 1500);
    }

    NavigationBar.setBackgroundColorAsync("white");
    NavigationBar.setButtonStyleAsync("dark");

    return (
        <View style={styles.container} >
            <StatusBar backgroundColor="white" style="dark" />
            
            <View style={styles.containerHeader} >
                <GradientText style={{ fontSize: 34, fontWeight: '900' }} >SOLUTIONS</GradientText>
            </View>

            <View style={styles.containerForm}>
                <TextInput label="E-mail" inputMode="email" placeholder="Digite um e-mail" />
                <TextInput secureTextEntry label="Senha" placeholder="Digite uma senha" />

                {/* <TouchableOpacity onPress={() => { navigation.navigate('Resume') }}>
                    <LinearGradient
                        colors={['rgb(71, 36, 164)', 'rgb(102, 58, 193)', 'rgb(139, 33, 202)']}
                        style={styles.button}
                        start={{ x: 0, y: 0.5 }}
                    >
                        <Text style={styles.buttonText}>Entrar</Text>
                    </LinearGradient>
                </TouchableOpacity> */}

                <TouchableOpacity style={{ marginTop: 20 }} activeOpacity={.75} onPress={login}>
                    <Button loading={isLoading}>
                        Entrar
                    </Button>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 14, alignSelf: "center" }} >
                    <Text style={{ color: '#A1A1A1' }} >Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
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