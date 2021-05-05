import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Body() {
    return (
        <View style={styles.body}>
            <Text>Body</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection:'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
