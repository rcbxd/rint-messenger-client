import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Body() {
    return (
        <View style={styles.body}>
            <Text style={{ fontFamily: "Proxima-Nova-Regular", fontSize: 34 }}>Body</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: 18
    },
});
