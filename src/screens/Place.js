import React, {useState} from "react";

import {SafeAreaProvider} from 'react-native-safe-area-context'
import {Image, StyleSheet, Text, View} from "react-native";
import place_image1 from '../assets/place_image1.png'
import DropDownPicker from 'react-native-dropdown-picker';
import {Button} from "react-native-elements";

export default function Place() {
    return (
        <SafeAreaProvider style={styles.container}>
            <View style={styles.center}>
                <Text style={styles.title}>¿En qué lugar colocarás tú controlador de C02?</Text>
                <Image source={place_image1} style={styles.image}/>
                <DropDownPicker
                    items={[
                        {label: 'Item 1', value: 'Casa'},
                        {label: 'Item 2', value: 'item2'},
                    ]}
                    textStyle={styles.textStyle}
                    containerStyle={styles.containerStyle}
                    style={styles.dropDown}
                    onChangeItem={item => console.log(item.label, item.value)}
                />

                <Button
                    title="Ingresar"
                    buttonStyle={styles.buttonStyle}
                    containerStyle={styles.containerStyleButton}
                />
            </View>

        </SafeAreaProvider>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FDF9FF',
        paddingHorizontal: 20,
        paddingTop: 35,
    },
    center: {
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontFamily: 'roboto',
        fontWeight: 'bold',
        color: 'black',
    },

    image: {
        width: 350,
        height: 300,
    },
    containerStyle: {
        height: 40,
        width: '70%'
    },
    textStyle: {
        fontSize: 15,
        fontWeight: '400'
    },
    dropDown: {
        backgroundColor: "white",
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 6,
        borderRadius: 10
    },
    buttonStyle: {
        backgroundColor: '#a100e4',
        borderColor: 'white',
        borderRadius: 30,
        paddingVertical: 10
    },
    containerStyleButton: {
        width: '65%',
        marginHorizontal: 0,
        marginTop: 80,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 6,
        borderRadius: 30,

    },
})