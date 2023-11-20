
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

type CardProps = {
    children: React.ReactNode;
}

export default function HeaderWrapper(props: CardProps) {

    return (
        <SafeAreaView style={styles.headerWrapper} >
            {props.children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        display: 'flex',
        height: 105,
        width: '100%',
        paddingTop: 38,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center'
    },
})