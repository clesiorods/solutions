import { View, StyleSheet, ColorValue, Text, StyleProp, ViewStyle, ActivityIndicator } from 'react-native';
import { SecundaryColor } from '../../styles/colors';

interface ButtonProps {
    color?: ColorValue | undefined,
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    loading?: boolean;
}

export default function Button(props: ButtonProps) {
    return (
        <View style={[styles.button, { backgroundColor: props.color ? props.color : SecundaryColor }]}>
            {props.loading ?
                <ActivityIndicator size={26} color="white" style={{ marginLeft:-4, marginRight: 8 }} />
                :
                ''
            }

            <Text style={[styles.butonText, { color: 'white' }]} >
                {props.children}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        height: 54,
        borderRadius: 14,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    butonText: {
        fontSize: 18
    }
});
