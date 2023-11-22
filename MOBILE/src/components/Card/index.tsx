import React from 'react';
import { View, Text, StyleSheet, StyleProp, ViewStyle, DimensionValue }
    from 'react-native';


type ContentProps = {
    children: React.ReactNode;
    height?: DimensionValue;
    width?: DimensionValue;
    size?: number;
    position?: number;
    style?: StyleProp<ViewStyle>
}


export default function Card(props: ContentProps) {
    return (
        <View style={[
            { height: props.height ? props.height : 160 },
            { width: props.width ? props.width : '100%' },
            { width: props.size == .5 ? '50%' : '100%' },
            styles.cardWrapper,
            {paddingRight: props.position == 1 ? 8 : 16},
            {paddingLeft: props.position == 2 ? 8 : 16},
        ]} >
            <View style={[
                styles.card,
                props.style,
            ]}>
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
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    card: {
        backgroundColor: 'rgb(245, 244, 248)',
        borderRadius: 15,
        shadowColor: 'rgba(0,0,0,.1)',
        padding:12,
        shadowOpacity: 0.02,
        shadowRadius: 6,
        elevation: 5,
        width: '100%',
        height: '100%',
    }
});
