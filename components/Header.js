import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Bell from '../assets/img/Bell.svg'
import Emoji from '../assets/img/Emoji.svg'

export function Header() {
    return (
        <View style={styles.header}>
            <View style={{flexDirection: 'row', alignItems:"center"}}>
                <Emoji />
                <Text>  Ве </Text>
                <Text>happy</Text>
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
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center",
        padding:50,
        height:120
    },
});
