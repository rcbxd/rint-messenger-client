import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { MessagesScreen } from "../pages/MessagesScreen";

export function MainApp(props) {
  return (
    <View style={styles.body}>
      <Header />
      <MessagesScreen style={{ height: "100%" }} navig={props.navigation} />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
});
