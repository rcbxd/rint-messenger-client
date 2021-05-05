import { StatusBar } from 'expo-status-bar';
import { Header } from "./components/Header.js";
import { Body } from "./components/Body.js"
import React from 'react';
import { StyleSheet, SafeAreaView, View, Platform } from 'react-native';

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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.droidSafeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Header></Header>
        <Body></Body>
      </View>
    </SafeAreaView>
  );
}