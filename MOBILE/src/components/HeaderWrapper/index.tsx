
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
        height: 100,
        width: '100%',
        // elevation:1,
        paddingTop: 38,
        backgroundColor: 'white',
        flexDirection:'row',
        justifyContent: 'space-around',
        alignItems:'center'
    },
})