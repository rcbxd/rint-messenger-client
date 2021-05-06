import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useState } from "react";

import { MessagesScreen } from "../pages/MessagesScreen";
import { SearchScreen } from "../pages/SearchScreen";
import { ProfileScreen } from "../pages/ProfileScreen";
import { CallsScreen } from "../pages/CallsScreen";

export function MainApp(props) {
  const [activePage, setActivePage] = useState(0);
  const handlePageChange = p => { setActivePage(p); }
  return (
    <View style={styles.body}>
      <Header />
      {activePage == 0 &&
        <MessagesScreen navigation={props.navigation} />
      }
      {activePage == 1 &&
        <SearchScreen navigation={props.navigation} />
      }
      {activePage == 2 &&
        <ProfileScreen navigation={props.navigation} />
      }
      {activePage == 3 &&
        <CallsScreen navigation={props.navigation} />
      }
      <Footer handler={handlePageChange} page={activePage} />
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
