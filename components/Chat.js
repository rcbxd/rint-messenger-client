import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {ChatHeader} from "./ChatHeader";

import SoundSvg from '../assets/img/chat-icons/sound.svg'
import {MessagesScreen} from "../pages/MessagesScreen";
import {Footer} from "./Footer";
import Message from './Message'

export function Chat(props) {
    return (
        <View style={styles.body}>

            <ChatHeader />

            <ScrollView style={{padding:27}}>
                <Message sound></Message>
                <Message reverse></Message>
                <Message sound reverse></Message>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    body:{
    },

});
