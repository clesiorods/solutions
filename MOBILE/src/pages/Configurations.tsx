import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ContentWrapper from '../components/ContentWrapper';
// import { StackTypes } from '../routes';

export default function Configurations() {

  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <ContentWrapper>
          <Text>Configurações</Text>
    </ContentWrapper>

  )
}