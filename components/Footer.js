import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import Search from "../assets/img/footer-icons/Search.svg";
import Edit from "../assets/img/footer-icons/Edit.svg";
import Document from "../assets/img/footer-icons/Document.svg";
import Home from "../assets/img/footer-icons/Home.svg";

export function Footer(props) {
  return (
    <View style={styles.footer}>

      <TouchableOpacity onPress={() => { props.handler(0) }}>
        <View style={styles.textNav}>
          <Text style={styles.textNavText}>
            Chat
          </Text>
          <View style={styles.textNavSelected} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { props.handler(1) }}>
        <View style={styles.iconNav}>
          <Search style={styles.selectedIcon} />
        </View>
      </TouchableOpacity>

      <View style={styles.buttonIconNav}>
        <Edit />
      </View>

      <TouchableOpacity onPress={() => { props.handler(2) }}>
        <View style={styles.iconNav}>
          <Document />
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { props.handler(3) }}>
        <View style={styles.iconNav}>
          <Home />
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 140,
    backgroundColor: "#ffffff",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingHorizontal: 50,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: -10,
  },
  buttonIconNav: {
    width: 75,
    height: 75,
    backgroundColor: "#FD4E2C",
    borderRadius: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textNav: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    height: 35,
  },
  textNavText: {
    color: "#FD4E2C",
    fontFamily: "Proxima-Nova-Bold",
    fontSize: 16,
  },
  textNavSelected: {
    backgroundColor: "#FD4E2C",
    height: 4,
    width: 4,
    borderRadius: 50,
  },
  selectedIcon: {
    color: "#FD4E2C",
  }
});
