import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Octicons, SimpleLineIcons } from '@expo/vector-icons';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ContentWrapper from '../../components/PageWrapper';
import HeaderWrapper from '../../components/HeaderWrapper';
import { SecundaryColor } from '../../styles/colors';
// import { StackTypes } from '../routes';

export default function Reports() {

  return (
    <ContentWrapper>
      <HeaderWrapper>
            <Text style={{ fontSize: 22, fontWeight: '600' }} >Relatórios</Text>
        <TouchableOpacity>
          <SimpleLineIcons name="action-redo" style={{ marginTop: 4 }} size={24} color={SecundaryColor} />
        </TouchableOpacity>
      </HeaderWrapper>
    </ContentWrapper>

  )
}
