import { View, TouchableOpacity, Animated, StyleSheet, Platform, Text, Keyboard } from 'react-native'
// import { SimpleLineIcons } from '@expo/vector-icons'
import { SecundaryColor } from '../Styles/colors';
import { Octicons } from '@expo/vector-icons';
import { useEffect, useRef, useState } from 'react';

// PÁGINAS QUE NÃO TERÃO NAVBAR
const hideTabBar = [0];

// ICONES DA TABBAR DE ACORDO COM SUAS POSIÇÕES
const arrayIcons:
  [
    { icon: 'home', name: 'Login' },
    { icon: 'home', name: 'Resumo' },
    { icon: 'checklist', name: 'Relatórios' },
    { icon: 'gear', name: 'Configurações' },
    { icon: 'person', name: 'Conta' },
  ] =
  [
    { icon: 'home', name: 'Login' },
    { icon: 'home', name: 'Resumo' },
    { icon: 'checklist', name: 'Relatórios' },
    { icon: 'gear', name: 'Configurações' },
    { icon: 'person', name: 'Conta' },
  ];


export function CustomTabBar({ state, descriptors, navigation }: any) {

  useEffect(() => {
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      fadeIn()
    });
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      fadeOut()
    });

    fadeIn();

    return () => {
      hideSubscription.remove();
      showSubscription.remove();
    };
  }, []);


  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start();
  };

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };


  if (hideTabBar.includes(state.index)) {
    fadeOut()
    return('');
  } else {
    fadeIn()
  }

  return (
    <Animated.View
      style={[styles.container, { opacity: fadeAnim }]}>
      <View style={styles.content}>
        {state.routes.map((route: any, index: any) => {

          if (hideTabBar.includes(index)) {
            return ('');
          }

          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttonTab}
            >
              <View style={{ alignItems: 'center', paddingTop: 0 }}>
                <View style={{ padding: 2, borderRadius: 99, backgroundColor: isFocused ? "transparent" : "transparent" }}>
                  <Octicons
                    name={arrayIcons[index].icon}
                    size={20}
                    color={isFocused ? '#ffffff' : '#5f5f5f'}
                  />
                </View>
              </View>
              <Text style={{ marginTop: -2, color: isFocused ? '#ffffff' : '#5f5f5f', fontSize: 9 }} >{arrayIcons[index].name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </Animated.View>
  );

}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 14
  },
  content: {
    height: 54,
    width: '100%',
    marginBottom: Platform.OS === 'ios' ? 0 : 0,
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 12,
    backgroundColor: SecundaryColor,
    flexDirection: 'row',
    elevation: 10,
    shadowColor: 'rgba(0,0,0,.4)',
    shadowOpacity: 0.2,
    shadowRadius: 3.80,
    borderRadius: 14
  },
  buttonTab: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red',
    borderRadius: 8,
    minWidth: '18%'
  }
})