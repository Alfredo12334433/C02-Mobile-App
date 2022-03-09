import React from "react";
import {Image, Text, TextInput, View, StyleSheet} from "react-native";
import login_image from '../assets/login_image.png';

export default function Login() {

    return (
        <View style={styles.container}>
            <View style={styles.container_image}>
                <Image source={login_image} style={styles.image}/>
            </View>
            <View style={styles.form}>

                <Text style={styles.title}>Ingresar</Text>
                <Text style={styles.subtitle}>¡Bienvenido de nuevo!</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    container: {
        marginTop: 10,
    },
    container_image: {
        alignItems: 'center',
    },
    image: {
        width: '85%',
        height: 250,

    },
    form: {
        marginLeft: 30,

    },
    title: {
        fontSize: 35,
        fontFamily: 'roboto',
        fontWeight: 'bold',
        color: 'black'
    },
    subtitle: {
        fontSize: 15,
        fontFamily: 'roboto',
        color: 'grey'
    }
});