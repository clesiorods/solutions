import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <Pressable
      className="dark:bg-indigo-950 text-gray-50 flex-1 justify-center items-center"
      onPress={toggleColorScheme}
    >
      <Text
        selectable={false}
        className='dark:text-white leading-loose text-2xl text-center mx-24'
      >
        {`Clique aqui paaaaaaarra alterar o modo! ${colorScheme === 'light' ? '☀️' : '🌙'}`}
      </Text>
      <StatusBar style="auto" />

    </Pressable>
  );
}
