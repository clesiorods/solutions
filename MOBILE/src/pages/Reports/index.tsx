import { Octicons, SimpleLineIcons } from '@expo/vector-icons';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ContentWrapper from '../../components/PageWrapper';
import HeaderWrapper from '../../components/HeaderWrapper';
import { SecundaryColor } from '../../styles/colors';
import { Skeleton } from 'moti/skeleton';
import Animated, { FadeIn, Layout } from 'react-native-reanimated';
import { useState } from 'react';
import Button from '../../components/Button';
import { SkeletonCommonProps } from '../../lib/SkeletonProps';
// import { StackTypes } from '../routes';

export default function Reports() {

  
  const [loading, setLoading] = useState(true);


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
