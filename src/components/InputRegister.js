import {StyleSheet, View} from "react-native";
import {Input} from "react-native-elements";

import React, {useRef, useState} from "react";

export default function InputRegister() {

    return (
        <View style={styles.form}>
            <Input
                label="Nombre"
                labelStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.containerStyle}
                rightIconContainerStyle={styles.leftIconContainerStyle}

            />
            <Input
                label="Correo electronico"
                labelStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.containerStyle}
                rightIconContainerStyle={styles.leftIconContainerStyle}


            />
            <Input
                label="Contraseña"
                labelStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.containerStyle1}
                rightIconContainerStyle={styles.leftIconContainerStyle}


            />

        </View>
    )
}
const styles = StyleSheet.create({
    form: {
        marginTop: 35,
    },
    inputContainerStyle: {
        borderRadius: 8,
        borderWidth: 1,
        // borderColor: '#a100e4'

    },

    containerStyle: {
        // borderWidth: 1,
        paddingHorizontal: 0,
        paddingVertical: 0,
        height: 70,
        marginBottom: 30
    },
    containerStyle1: {
        // borderWidth: 1,
        paddingHorizontal: 0,
        paddingVertical: 0,
        height: 70,
        marginBottom: 5
    },

    leftIconContainerStyle: {
        marginRight: 10
    },
    inputStyle: {
        fontSize: 15,
        paddingBottom: 5,
        color: 'black'
    },
})