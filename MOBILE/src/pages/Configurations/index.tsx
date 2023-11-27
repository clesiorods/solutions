import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ContentWrapper from '../../components/PageWrapper';
import HeaderWrapper from '../../components/HeaderWrapper';
import { Octicons, SimpleLineIcons } from '@expo/vector-icons';
import { SecundaryColor } from '../../styles/colors';

// import { StackTypes } from '../routes';

export default function Configurations() {

  return (
    <ContentWrapper>
      <HeaderWrapper>
        <Text style={{ fontSize: 22, fontWeight: '600' }} >Configurações</Text>
        {/* <TouchableOpacity>
          <SimpleLineIcons name="action-redo" style={{ marginTop: 4 }} size={24} color={SecundaryColor} />
        </TouchableOpacity> */}
      </HeaderWrapper>
    </ContentWrapper>

  )
}
