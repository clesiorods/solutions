import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import ContentWrapper from '../../components/PageWrapper';
import { SimpleLineIcons } from '@expo/vector-icons';
import Card from '../../components/Card';
import { VictoryChart, VictoryBoxPlot, VictoryPie } from 'victory-native';
import HeaderWrapper from '../../components/HeaderWrapper';
import { Image } from 'expo-image';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
  },
  image: {
    flex: 1,
    height: 50,
    width: 50,
    backgroundColor: '#0553',
    borderRadius: 25,
  },
});


export default function Resume() {

  return (
    <ContentWrapper>
      {/* HEADER DA PÁGINA */}
      <HeaderWrapper>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source="https://picsum.photos/seed/696/3000/2000"
            placeholder={blurhash}
            contentFit="cover"
            transition={1000}
          />
        </View>
        <Text >Resumo</Text>
        <SimpleLineIcons name="bell" size={24} color="black" />
      </HeaderWrapper>

      <ScrollView>
        {/* DIV VALOR DE RESUMO */}
        <View style={{ marginHorizontal: 16 }} >
          <Text  >Gastos do Mês</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
            <Text  >R$ 1.809,35</Text>
            <SimpleLineIcons name="action-redo" size={24} color="black" />
          </View>
        </View>

        <Card style={{ backgroundColor: 'rgb(161, 231, 32)' }} >
        </Card>

        <View style={{ flexDirection: 'row' }}>
          <Card style={{ backgroundColor: 'rgb(0, 0, 0)' }} size={0.5} position={1}>
            <Text style={{ color: 'white' }} >Teste de card</Text>
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
