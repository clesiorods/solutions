
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Routes from './src/routes';
import * as NavigationBar from 'expo-navigation-bar';


export default function App() {
  NavigationBar.setBackgroundColorAsync("white");
  NavigationBar.setButtonStyleAsync("dark");
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="white" barStyle={'default'} />
      <Routes/>
    </NavigationContainer>
  );
}