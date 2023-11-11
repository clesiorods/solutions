import React from 'react';
import { View, Text, StyleSheet }
    from 'react-native';


type ContentProps = {
    children: React.ReactNode;
}


export default function Card(props: ContentProps) {
    return (
        <View style={styles.cardWrapper} >
            <View style={styles.card}>
                <Text>
                    {props.children}
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 200,
        padding: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 15,
        shadowColor: 'rgba(0,0,0,.2)',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.02,
        shadowRadius: 6,
        elevation: 1,
        width: '100%',
        height: '100%',
    }
});
