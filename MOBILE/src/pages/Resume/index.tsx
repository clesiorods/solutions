import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ContentWrapper from '../../components/PageWrapper';
import { SimpleLineIcons } from '@expo/vector-icons';
import Card from '../../components/Card';
import { VictoryChart, VictoryBoxPlot, VictoryPie } from 'victory-native';
import HeaderWrapper from '../../components/HeaderWrapper';


export default function Resume() {

  return (
    <ContentWrapper>
      {/* HEADER DA PÁGINA */}
      <HeaderWrapper>
        <SimpleLineIcons name="layers" size={24} color="black" />
        <Text >Resumo</Text>
        <SimpleLineIcons name="bell" size={24} color="black" />
      </HeaderWrapper>

      <ScrollView>
        {/* DIV VALOR DE RESUMO */}
        <View style={{marginHorizontal: 16}} >
          <Text  >Gastos do Mês</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
            <Text  >R$ 1.809,35</Text>
            <SimpleLineIcons name="action-redo" size={24} color="black" />
          </View>
        </View>

        <Card style={{ backgroundColor: 'rgb(161, 231, 32)' }} >
        </Card>

        <View style={{ flexDirection: 'row' }}>
          <Card style={{backgroundColor:'rgb(0, 0, 0)'}} size={0.5} position={1}>
            <Text style={{color:'white'}} >Teste de card</Text>
          </Card>
          <Card size={0.5} position={2}>
            <Text>Teste de card</Text>
          </Card>
        </View>

        <Card>
          <Text>Teste de card</Text>
        </Card>

        <Card>
          <Text>Teste de card</Text>
        </Card>

        <Card style={{ flexDirection: 'column' }} >
          <View>
            <VictoryPie
              colorScale={["navy", "rgb(165, 35, 35)", "gold"]}
              height={160}
              data={[
                { x: "Cats", y: 35 },
                { x: "Dogs", y: 40 },
                { x: "Birds", y: 55 }
              ]}
            /></View>
        </Card>

        <Card>
          <Text>Teste de card</Text>
        </Card>
      </ScrollView>

    </ContentWrapper>
  )
}
