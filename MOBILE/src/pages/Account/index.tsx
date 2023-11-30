import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ContentWrapper from '../../components/PageWrapper';
import { Octicons, SimpleLineIcons } from '@expo/vector-icons';
import HeaderWrapper from '../../components/HeaderWrapper';
import { SecundaryColor } from '../../styles/colors';
import { useAuth } from '../../hooks/AuthContext';
import { StackTypes } from '../../routes/app.router';
import { useEffect, useState } from 'react';
import * as LocalAuthentication from "expo-local-authentication";
import Button from '../../components/Button';



export default function Account() {

  const navigation = useNavigation<StackTypes>();
  const { logout } = useAuth();

  const [localAuth, setLocalAuth] = useState(false);


  async function verifyAvaiableAuth() {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
    // console.log(compatible);
    // console.log(types);
  }


  async function handlePrintAuth() {
    const hasDigitalPrint = await LocalAuthentication.isEnrolledAsync();
    if (!hasDigitalPrint) {
      return console.log('Não há biometria cadastrada');
    }

    const auth = await LocalAuthentication.authenticateAsync({
      promptMessage: 'Login com biometria',
      fallbackLabel: 'Biometria não reconhecida'
    })

    setLocalAuth(auth.success);
    console.log(auth);
  }


  const handleLogout = async () => {
    await logout();
    navigation.navigate('Login');
  }


  useEffect(() => {
    verifyAvaiableAuth();
  }, [])


  return (
    <ContentWrapper>
      <HeaderWrapper>
        <Text style={{ fontSize: 22, fontWeight: '600' }} >Minha Conta</Text>
        <TouchableOpacity onPress={handleLogout}>
          <SimpleLineIcons name="logout" style={{ marginTop: 4 }} size={22} color={SecundaryColor} />
        </TouchableOpacity>
      </HeaderWrapper>
      <ScrollView>
        <View style={{ height: 500, flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <Text style={{ fontSize: 16 }}>
            Usuário conectado: {localAuth ? 'Sim' : 'Não'}
          </Text>

          <TouchableOpacity
            onPress={handlePrintAuth}
            style={{ width: 300, marginTop: 32 }}
          >
            <Button >Autenticar</Button>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </ContentWrapper>

  )
}
