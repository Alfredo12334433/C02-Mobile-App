import {StyleSheet, View} from "react-native";
import {Input} from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import React, {useRef, useState} from "react";

export default function InputLogin() {

    return (
        <View style={styles.form}>
            <Input
                placeholder="Correo electronico"
                rightIcon={<Icon name="mail" size={20}/>}
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.containerStyle1}
                rightIconContainerStyle={styles.leftIconContainerStyle}
                inputStyle={styles.inputStyle}
                style={styles.divider}

            />
            <Input
                placeholder="Contraseña"
                rightIcon={<Icon name="eye" size={20}/>}
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.containerStyle2}
                rightIconContainerStyle={styles.leftIconContainerStyle}
                inputStyle={styles.inputStyle}

            />

        </View>
    )
}
const styles = StyleSheet.create({
    form: {
        marginTop: 20
    },
    inputContainerStyle: {
        borderRadius: 10,
        borderWidth: 1,
        // borderColor: '#a100e4'

    },

    containerStyle1: {
        // borderWidth: 1,
        paddingHorizontal: 0,
        paddingVertical: 0,
        height: 60,
        marginBottom: 30
    },
    containerStyle2: {
        // borderWidth: 1,
        paddingHorizontal: 0,
        paddingVertical: 0,
        height: 60,
        marginBottom: 5
    },

    leftIconContainerStyle: {
        marginRight: 10
    },
    inputStyle: {
        paddingLeft: 10,
        fontSize: 15
    },
})