import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import ContentWrapper from '../../components/PageWrapper';
import { Octicons, SimpleLineIcons } from '@expo/vector-icons';
import HeaderWrapper from '../../components/HeaderWrapper';
import { SecundaryColor } from '../../styles/colors';
import { useAuth } from '../../hooks/AuthContext';
import { StackTypes } from '../../routes/app.router';

// import { StackTypes } from '../routes';

export default function Account() {

  const navigation = useNavigation<StackTypes>();
  const {logout} = useAuth();

  const handleLogout = async () => {
    await logout();
    navigation.navigate('Login');
  }

  return (
    <ContentWrapper>
      <HeaderWrapper>
        <Text style={{ fontSize: 22, fontWeight: '600' }} >Minha Conta</Text>
        <TouchableOpacity onPress={handleLogout}>
          <SimpleLineIcons name="logout" style={{ marginTop: 4 }} size={22} color={SecundaryColor} />
        </TouchableOpacity>
      </HeaderWrapper>
    </ContentWrapper>

  )
}
