import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import ContentWrapper from '../components/ContentWrapper';
// import { StackTypes } from '../routes';

export default function Wellcome() {

  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <ContentWrapper>
      <Pressable
        className="bg-indigo-50 dark:bg-indigo-950 flex-1 justify-center items-center"
        onPress={() => { toggleColorScheme() }}
      >
        <Text
          selectable={false}
          className='dark:text-white leading-loose text-2xl text-center mx-24'
        >
          {`Clique aqui paaaaaaarra alterar o modo! ${colorScheme === 'light' ? '☀️' : '🌙'}`}
        </Text>
        <StatusBar style="auto" />

      </Pressable>
    </ContentWrapper>
  );
}
