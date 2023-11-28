
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { StackTypes } from '../../routes/app.router';
import { useEffect } from 'react';
import { useAuth } from '../../hooks/AuthContext';

type CardProps = {
    children: React.ReactNode;
}

export default function PageWrapper(props: CardProps) {

    const navigation = useNavigation<StackTypes>();
    const {authState} = useAuth();

    useEffect(() => {
        if(!authState.token) {
            // console.log('Expulsando o usuário');
            navigation.navigate('Login');
        }
    }, [authState])

    return (
        <SafeAreaView style={styles.contentWrapper} >
            <StatusBar style="dark" />
            {props.children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contentWrapper: {
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
})