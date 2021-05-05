import { StatusBar } from 'expo-status-bar';
import { Header } from "./components/Header.js";
import { Body } from "./components/Body.js"
import React from 'react';
import { StyleSheet, SafeAreaView, View, Platform } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from "expo-app-loading";

import { colors } from "./utils/colors";

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

import { MainApp } from "./components/MainApp";

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
          <MainApp />
        </View>
      </SafeAreaView>
    );
  }
}