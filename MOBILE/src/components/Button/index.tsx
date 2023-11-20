import { View, StyleSheet, ColorValue, Text, StyleProp, ViewStyle } from 'react-native';
import { SecundaryColor } from '../Styles/colors';

interface ButtonProps {
    color?: ColorValue | undefined,
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

export default function Button(props: ButtonProps) {
    return (
        <View style={[styles.button, { backgroundColor: props.color ? props.color : SecundaryColor }]}>
            <Text style={[styles.butonText, { color: 'white' }]} >
                {props.children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 54,
        borderRadius: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    butonText: {
        fontSize: 18
    }
});
