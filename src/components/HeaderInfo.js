import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function HeaderInfo({title, subtitle}) {

    return (
        <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontFamily: 'roboto',
        fontWeight: 'bold',
        color: 'black',
    },
    subtitle: {
        fontSize: 15,
        fontFamily: 'roboto',
        color: 'grey'
    },
})