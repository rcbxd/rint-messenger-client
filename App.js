import { StatusBar } from 'expo-status-bar';
import { Header } from "./components/Header.js";
import { Body } from "./components/Body.js"
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, SafeAreaView, View, Platform } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";
import { colors } from "./utils/colors";
import { MainApp } from "./components/MainApp";
import { ChatScreen } from "./pages/ChatScreen";

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  droidSafeArea: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: 'Proxima-Nova-Regular',
  },
});


export default function App() {
  let [fontsLoaded] = useFonts({
    'Proxima-Nova-Regular': require('./assets/fonts/Proxima-Nova-Regular.ttf'),
    'Proxima-Nova-Bold': require('./assets/fonts/Proxima-Nova-Bold.ttf'),
    'Proxima-Nova-ExtraBold': require('./assets/fonts/Proxima-Nova-ExtraBold.otf'),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <SafeAreaView style={styles.droidSafeArea}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerShown: false
            }}>
              <Stack.Screen name="Home" component={MainApp} navigation={navigator} />
              <Stack.Screen name="Chat" component={ChatScreen} navigation={navigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </SafeAreaView>
    );
  }
}