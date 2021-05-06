import { StyleSheet, Text, View } from "react-native";
import SoundSvg from "../assets/img/chat-icons/sound.svg";
import React from "react";

export default function Message(props) {
  return (
    <View style={styles.messageWrap(props.reverse ? '-reverse' : '')}>
      <View style={styles.message(props.reverse ? '-reverse' : '')}>
        {'sound' in props && <SoundSvg></SoundSvg>}<Text style={styles.messageText}>Listening</Text>
      </View>
      <Text>
        12:23 PM
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
  },
  message: res => {
    return {
      padding: 20,
      flex: 0,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      backgroundColor: res ? 'white' : '#FF8B6C',
      // width:155.8,
      height: 60,
      ...(res && {
        borderWidth: 1,
        borderColor: "#ECECEC"
      }),
      ...(!res ? {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 29,
        borderBottomRightRadius: 29,

      } : {
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 29,
        borderTopLeftRadius: 29,
        borderBottomRightRadius: 25,
      })
    }
  },
  messageWrap: res => {
    return {
      flex: 1,
      flexDirection: 'row' + res,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    }
  },
  messageText: {
    marginLeft: 5
  }
});
