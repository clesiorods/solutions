import { View, TouchableOpacity, StyleSheet, Platform, Text } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons'

// PÁGINAS QUE NÃO TERÃO NAVBAR
const hideTabBar = [0];

// ICONES DA TABBAR DE ACORDO COM SUAS POSIÇÕES
const arrayIcons:
  [
    { icon: 'docs', name: 'Login' },
    { icon: 'home', name: 'Resumo' },
    { icon: 'docs', name: 'Relatórios' },
    { icon: 'equalizer', name: 'Configurações' },
    { icon: 'user', name: 'Conta' },
  ] =
  [
    { icon: 'docs', name: 'Login' },
    { icon: 'home', name: 'Resumo' },
    { icon: 'docs', name: 'Relatórios' },
    { icon: 'equalizer', name: 'Configurações' },
    { icon: 'user', name: 'Conta' },
  ];


export function CustomTabBar({ state, descriptors, navigation }: any) {
  if (hideTabBar.includes(state.index)) {
    return ('');
  } else {
    return (
      <View
        style={styles.container}>
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
                <View style={{ alignItems: 'center', paddingTop: 2 }}>
                  <View style={{ padding: 2, borderRadius: 99, backgroundColor: isFocused ? "transparent" : "transparent" }}>
                    <SimpleLineIcons
                      name={arrayIcons[index].icon}
                      size={20}
                      color={isFocused ? '#ffffff' : '#535353'}
                    />
                  </View>
                </View>
                <Text style={{ color: isFocused ? '#ffffff' : '#535353', fontSize: 9 }} >{arrayIcons[index].name}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 12
  },
  content: {
    height: 60,
    width: '100%',
    marginBottom: Platform.OS === 'ios' ? 0 : 0,
    position: 'absolute',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 12,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    flexDirection: 'row',
    elevation: 10,
    shadowColor: 'rgba(0,0,0,.2)',
    shadowOpacity: 0.2,
    shadowRadius: 3.80,
    borderRadius: 15
  },
  buttonTab: {
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'red',
    borderRadius: 8,
    minWidth: '18%'
  }
})