import React from 'react';
import { StyleSheet, ColorValue, Text } from 'react-native';

interface InputProps {
    children?: React.ReactNode,
}

export default function InputLabel(props: InputProps) {
    return (
        <Text style={styles.label}>{props.children?props.children:''}</Text>
    );
}

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        margin: 1
    }
});
