import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"

import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";

export default function Login() {
  const navigation = useNavigation<StackTypes>();

    return (
        <View style={styles.container} >
            <View style={styles.containerHeader} >
                <Text style={styles.message} >Bem-vindo(a)</Text>
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.label}>E-mail</Text>
                <TextInput style={styles.input} placeholder="Digite um e-mail" />

                <Text style={styles.label}>Senha</Text>
                <TextInput style={styles.input} placeholder="Digite uma senha" />

                <TouchableOpacity onPress={() => { navigation.navigate('Resume') }}>
                    <LinearGradient
                        colors={['rgb(71, 36, 164)', 'rgb(102, 58, 193)', 'rgb(139, 33, 202)']}
                        style={styles.button}
                        start={{x:0, y:0.5}}
                    >
                        <Text style={styles.buttonText}>Entrar</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonRegister} >
                    <Text style={styles.buttonTextRegister} >Não possui uma conta? Cadastre-se</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000a32f7'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%',
        flex: 3
    },
    message: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm: {
        backgroundColor: '#FFF',
        flex: 2,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        padding: '6%'
    },
    label: {
        fontSize: 16,
    },
    input: {
        height: 48,
        borderRadius: 24,
        marginBottom: 8,
        fontSize: 16,
        backgroundColor: "rgba(245,245,245,1)",
        paddingLeft: 18

    },
    button: {
        backgroundColor: '#000a32f7',
        width: '100%',
        borderRadius: 24,
        height: 48,
        marginTop: 14,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonRegister: {
        marginTop: 14,
        alignSelf: "center",
    },
    buttonTextRegister: {
        color: '#A1A1A1'
    },
})