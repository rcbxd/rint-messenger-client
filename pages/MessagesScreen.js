import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { MessageListBox } from "../components/MessageListBox";
import { Divider } from "../components/Divider";

const messages = [
  {
    name: 'Mohammad',
    text: 'End of this week you will know the results',
    missed: 3,
    profilePicture: require(`../assets/img/contacts/mohammad.png`),
  },
  {
    name: 'Arman Rokni',
    text: '12:46',
    missed: 3,
    profilePicture: require(`../assets/img/contacts/arman.png`),
  },
  {
    name: 'Sepide Moqadasi',
    text: 'Yes, I have a new concept tomorrow ',
    missed: 3,
    profilePicture: require(`../assets/img/contacts/sepide.png`),
  },
  {
    name: 'AfshinT2Y',
    text: 'Shall we go hiking tomorrow? ',
    missed: 3,
    profilePicture: require(`../assets/img/contacts/afshin.png`),
  },
  {
    name: 'Arman Rokni',
    text: '12:46',
    missed: 3,
    profilePicture: require(`../assets/img/contacts/mohammad.png`),
  },
  {
    name: 'Arman Rokni',
    text: '12:46',
    missed: 3,
    profilePicture: require(`../assets/img/contacts/mohammad.png`),
  }
]

export function MessagesScreen(props) {
  return (
    <ScrollView style={styles.messagesScreen}>
      {messages.map(m => (
        <View>
          <MessageListBox msg={m} navig={props.navig} />
          <Divider />
        </View>
      ))}
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
