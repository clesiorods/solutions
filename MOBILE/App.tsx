import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppRouter } from './src/routes/app.router';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
  NavigationBar.setBackgroundColorAsync("#823fcf");
  NavigationBar.setButtonStyleAsync("light");

  return (
    <View style={{flex:1}}>
      <AppRouter/>
    </View>
  );
}