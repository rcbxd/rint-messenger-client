import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MessageListBox } from "../components/MessageListBox";
import { Divider } from "../components/Divider";


export function ProfileScreen(props) {
  return (
    <ScrollView style={styles.messagesScreen}>
      <Text>Profile</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  messagesScreen: {
    width: "100%",
    paddingHorizontal: 50,
    flex: 1,
  }
});
