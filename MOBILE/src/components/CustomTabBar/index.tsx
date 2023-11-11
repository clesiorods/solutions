import { View, TouchableOpacity, StyleSheet, Platform, Text } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const hideTabBar = [0];


export function CustomTabBar({ state, descriptors, navigation }:any) {
  if(hideTabBar.includes(state.index)) {
    return(<></>);
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          {state.routes.map((route:any, index:any) => {

            if(hideTabBar.includes(index)) {
              return(<></>);
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
                <View style={{  alignItems: 'center', padding: 4}}>
                  <View style={{ padding:3, borderRadius: 99, backgroundColor: isFocused ? "transparent" : "transparent"}}>
                    <MaterialIcons
                      name={options.tabBarIcon}
                      size={26}
                      color={isFocused ? '#ffffff' : '#535353'}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red', 
    width: '100%',
  },
  content:{
    height:60,
    width: '100%',
    marginBottom: Platform.OS === 'ios' ? 0 : 0,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 0,
    backgroundColor: 'rgb(27, 23, 41)', 
    flexDirection: 'row',
    gap: 18,
    elevation: 10,
    shadowOpacity: 0.2,
    shadowRadius: 3.80,
  },
  buttonTab:{
    justifyContent: 'center', 
    alignItems: 'center',
  }
})