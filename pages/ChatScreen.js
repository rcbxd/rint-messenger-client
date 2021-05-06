import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { ChatHeader } from "../components/ChatHeader";
import Message from '../components/Message'

export function ChatScreen(props) {
  return (
    <View style={styles.body}>
      <ChatHeader navigation={props.navigation} />
      <ScrollView style={{ padding: 27 }}>
        <Message sound></Message>
        <Message reverse></Message>
        <Message sound reverse></Message>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
  },

});
