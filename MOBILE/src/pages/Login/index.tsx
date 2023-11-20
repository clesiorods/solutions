import { View, Text, StyleSheet, TouchableOpacity } from "react-native"

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import { PrimaryColor, TertiaryColor } from "../../components/Styles/colors";
import GradientText from "../../components/TextGradient";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";

export default function Login() {
    const navigation = useNavigation<StackTypes>();

    return (
        <View style={styles.container} >
            <View style={styles.containerHeader} >
                <GradientText style={{ fontSize: 30, fontWeight: '900' }} >SOLUTIONS</GradientText>
            </View>

            <View style={styles.containerForm}>
                <TextInput label="E-mail" placeholder="Digite um e-mail" />
                <TextInput label="Senha" placeholder="Digite uma senha" />

                {/* <TouchableOpacity onPress={() => { navigation.navigate('Resume') }}>
                    <LinearGradient
                        colors={['rgb(71, 36, 164)', 'rgb(102, 58, 193)', 'rgb(139, 33, 202)']}
                        style={styles.button}
                        start={{ x: 0, y: 0.5 }}
                    >
                        <Text style={styles.buttonText}>Entrar</Text>
                    </LinearGradient>
                </TouchableOpacity> */}

                <TouchableOpacity style={{ marginTop: 20 }} activeOpacity={.75} onPress={() => { navigation.navigate('Resume') }}>
                    <Button>Entrar</Button>
                </TouchableOpacity>

                <TouchableOpacity style={{ marginTop: 14, alignSelf: "center" }} >
                    <Text style={{color: '#A1A1A1'}} >Não possui uma conta? Cadastre-se</Text>
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
        justifyContent:'center',
        alignItems:'center',
    },

    containerForm: {
        height: '50%',
        backgroundColor: '#FFF',
        flex: 2,
        justifyContent:'center',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: 16
    }
})