
import React from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import { PrimaryGradient } from '../../styles/colors';

interface TextGradientProps {
    children: React.ReactNode;
    style?: StyleProp<TextStyle> 
}

export default function GradientText(props:TextGradientProps) {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={PrimaryGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text {...props} style={[{fontWeight:'bold'}, props.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};
