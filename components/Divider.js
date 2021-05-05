import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Divider() {
  return (
    <View style={{ paddingHorizontal: 40, }}>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 2,
    backgroundColor: "rgba(131, 142, 163, 0.08)",
  }
});
