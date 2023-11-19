
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

type CardProps = {
    children: React.ReactNode;
}

export default function PageWrapper(props: CardProps) {

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