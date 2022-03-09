import {StyleSheet, Text, View} from "react-native";
import React from "react";

export default function HeaderInfo() {

    return (
        <View>
            <Text style={styles.title}>Inicia sesión</Text>
            <Text style={styles.subtitle}>¡Bienvenido de nuevo!</Text>
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