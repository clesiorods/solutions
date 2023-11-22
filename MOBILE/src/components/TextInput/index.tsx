import { View, StyleSheet, TextInput as Input, ColorValue, Text } from 'react-native';
import { SecundaryColor } from '../Styles/colors';

interface InputProps {
    label?: string,
    placeholder?: string;
    color?: ColorValue | undefined;
}

export default function TextInput(props: InputProps) {
    return (
        <View style={{width:'100%'}}>
            <Text style={styles.label}>{props.label}</Text>
            <Input style={[styles.input, { backgroundColor: props.color ? props.color : styles.input.backgroundColor }]} placeholder={props.placeholder} />
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        margin: 1
    },
    input: {
        width:'100%',
        height: 54,
        borderRadius: 15,
        marginBottom: 8,
        fontSize: 16,
        backgroundColor: "rgba(245,245,245,1)",
        paddingLeft: 18

    },
});
