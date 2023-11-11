import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
// import { StackTypes } from '../routes';

type CardProps = {
    children: React.ReactNode;
}

export default function ContentWrapper(props: CardProps) {

    return (
        <SafeAreaView style={styles.contentWrapper} >
            <View style={styles.content} className='flex-1' >
                <ScrollView style={{ marginBottom: 1}}>
                    {props.children}
                </ScrollView>
            </View>
            <View style={styles.backPlaceNavBar}>
                <Text>Esconder</Text>
            </View>
            <StatusBar style="dark" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    contentWrapper: {
        display: 'flex',
        height: '100%',
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'rgb(0, 0, 0)',
    },
    content: {
        // padding: 19,
        paddingTop: 38,
        backgroundColor: 'rgb(248, 248, 248)',
        borderBottomLeftRadius: 29,
        borderBottomRightRadius: 29,
    },
    backPlaceNavBar: {
        height: 60,
        backgroundColor: 'rgb(0, 0, 0)',
    }
})