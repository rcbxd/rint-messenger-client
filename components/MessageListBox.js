import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity  } from 'react-native';

export function MessageListBox(props) {
  return (
      <TouchableOpacity onPress={()=>{Alert.alert('b'); props.navig.navigate('Chat'); console.log(props.navig)}}>
        <View style={styles.messageListBox} >
          <Image source={props.msg.profilePicture} />
          <View style={styles.messageContent}>
            <Text style={styles.messageName}>{props.msg.name}</Text>
            <Text style={styles.messageText}>{props.msg.text}</Text>
          </View>
          <View style={styles.messageTime}>
            <Text style={styles.messageTimeText}>10:25 AM</Text>
          </View>
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  messageListBox: {
    width: "100%",
    height: 115,
    //backgroundColor: "rgba(47, 182, 142, 0.12)",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  messageContent: {
    marginHorizontal: 15,
    flexDirection: "column",
    justifyContent: "space-around",
    overflow: "hidden",
    flex: 1,
  },
  messageName: {
    fontFamily: "Proxima-Nova-Bold",
    fontSize: 16,
    color: "#130F26",
    lineHeight: 20,
  },
  messageText: {
    color: "#838EA3",
    fontFamily: "Proxima-Nova-Regular",
    fontSize: 12,
    lineHeight: 15,
    marginTop: 2,
    width: "100%",
  },
  messageTime: {
    flexDirection: "column",
  },
  messageTimeText: {
    fontFamily: "Proxima-Nova-Bold",
    fontSize: 10.5,
    color: "#515F79",
  },
});
