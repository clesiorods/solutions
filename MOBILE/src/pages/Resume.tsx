import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ContentWrapper from '../components/ContentWrapper';
import { SimpleLineIcons } from '@expo/vector-icons';
import Card from '../components/Card';


export default function Resume() {

  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <ContentWrapper>
      {/* HEADER DA PÁGINA */}
      <View className='flex flex-row justify-between my-4 mx-6'>
          <SimpleLineIcons name="layers" size={24} color="black" />
          <Text className='text-lg' >Resumo</Text>
          <SimpleLineIcons name="bell" size={24} color="black" />
      </View>


      {/* DIV VALOR DE RESUMO */}
      <View className='mx-6' >
        <Text className='text-lg font-bold' >Gastos do Mês</Text>
        <View className='flex flex-row justify-between' >
          <Text className='text-3xl font-bold text-green-600' >R$ 1.809,35</Text>
          <SimpleLineIcons name="action-redo" size={24} color="black" />
        </View>
      </View>


      <Card>
        <Text>Teste de card</Text>
      </Card>

      <Card>
        <Text>Teste de card</Text>
      </Card>

      <Card>
        <Text>Teste de card</Text>
      </Card>

      <Card>
        <Text>Teste de card</Text>
      </Card>

      <Card>
        <Text>Teste de card</Text>
      </Card>
    </ContentWrapper>
  )
}
