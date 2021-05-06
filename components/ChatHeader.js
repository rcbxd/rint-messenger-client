import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Back from '../assets/img/header-icons/Back.svg'
import Call from '../assets/img/header-icons/Call.svg'

export function ChatHeader(props) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => { props.navigation.goBack() }} style={{ flexDirection: 'row', alignItems: "center", height: 50 }}>
        <Back />
      </TouchableOpacity>
      <View>
        <Call />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    padding: 50,
    height: 120
  },
});
