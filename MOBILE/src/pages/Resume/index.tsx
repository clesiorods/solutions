import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Pressable, TouchableOpacity, ScrollView, StyleSheet, Text, View } from 'react-native';
import ContentWrapper from '../../components/PageWrapper';
import { Octicons, SimpleLineIcons } from '@expo/vector-icons';
import Card from '../../components/Card';
import { VictoryChart, VictoryBoxPlot, VictoryPie } from 'victory-native';
import HeaderWrapper from '../../components/HeaderWrapper';
import { Image } from 'expo-image';
import GradientText from '../../components/TextGradient';
import { PrimaryColor, SecundaryColor, TertiaryColor } from '../../components/Styles/colors';
import LineChart from './LineChart';
import TextInput from '../../components/TextInput';
import { StackTypes } from '../../routes/app.router';


const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';



export default function Resume() {

  const navigation = useNavigation<StackTypes>();

  return (
    <ContentWrapper>
      <HeaderWrapper>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => { navigation.navigate('Account') }}>
            <View style={headerStyles.container}>
              <Image
                style={headerStyles.image}
                source="https://avatars.githubusercontent.com/u/20101892?v=4"
                placeholder={blurhash}
                contentFit="cover"
                transition={1000}
              />
            </View>
          </TouchableOpacity>
          <View style={{ marginLeft: 6 }} >
            <Text style={{ opacity: .5, marginBottom: -5 }} >Boa tarde!</Text>
            <Text style={{ fontSize: 18, fontWeight: '600' }} >Clesio Rodrigues</Text>
          </View>
        </View>

        <TouchableOpacity>
          <SimpleLineIcons name="bell" style={{ marginTop: 8 }} size={24} color={SecundaryColor} />
        </TouchableOpacity>
      </HeaderWrapper>


      <ScrollView>
        {/* DIV VALOR DE RESUMO */}
        <View style={{ marginHorizontal: 18, marginTop: 6 }} >
          <Text style={{ marginBottom: -5, opacity: .5 }} >Gastos de Novembro</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

            {/* <Text style={{ fontSize: 28, fontWeight: '900' }} >R$ 1.809,35</Text> */}
            <GradientText style={{ fontSize: 30, fontWeight: '700' }} >R$ 1.809,35</GradientText>

            <SimpleLineIcons style={{ marginTop: 10, marginRight: 2 }} name="size-fullscreen" size={20} color={SecundaryColor} />
          </View>
        </View>

        <Card style={{ backgroundColor: PrimaryColor, position: 'relative', padding: 0 }} >
          <LineChart />
        </Card>

        <View style={{ flexDirection: 'row' }}>
          <Card style={{ backgroundColor: SecundaryColor }} size={0.5} position={1}>
            <Text style={{ color: 'white' }} >Teste de card</Text>
          </Card>
          <Card size={0.5} position={2}>
            <Text>Teste de card</Text>
          </Card>
        </View>

        <Card>
          <Text>Teste de card</Text>
        </Card>

        <View style={{ marginHorizontal: 16, marginVertical: 8 }}>
          <TextInput label="Teste" placeholder="Teste de input de texto" />
        </View>

        <Card>
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



const headerStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
  },
  image: {
    flex: 1,
    height: 40,
    width: 40,
    backgroundColor: '#0553',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#4600a1'
  },
});
