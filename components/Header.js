import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bell from '../assets/img/header-icons/Bell.svg'
import Emoji from '../assets/img/header-icons/Emoji.svg'

export function Header() {
    return (
        <View style={styles.header}>
            <View style={{ flexDirection: 'row', alignItems: "center", height: 50 }}>
                <Emoji />
                <Text style={styles.titleBlack}> Ве </Text>
                <Text style={styles.titleGrey}>happy</Text>
            </View>
            <View>
                <Bell />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 0,
        // backgroundColor:'red',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 50,
        height: 120
    },
    titleBlack: {
        fontSize: 25,
        fontFamily: "Proxima-Nova-Bold",
        color: "#000000",
        marginBottom: 2
    },
    titleGrey: {
        fontSize: 25,
        fontFamily: "Proxima-Nova-ExtraBold",
        color: "#696969"
    }
});
