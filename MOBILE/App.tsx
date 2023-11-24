import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AppRouter } from './src/routes/app.router';
import * as NavigationBar from 'expo-navigation-bar';
import { AuthProvider } from './src/hooks/AuthContext';

export default function App() {
  NavigationBar.setBackgroundColorAsync("white");
  NavigationBar.setButtonStyleAsync("dark");

  return (
    <AuthProvider>
      <View style={{ flex: 1 }}>
        <AppRouter />
      </View>
    </AuthProvider>
  );
}