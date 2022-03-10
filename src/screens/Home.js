import React from "react";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {StyleSheet, View, Text, Image} from "react-native";
import HeaderInfo from "../components/HeaderInfo";
import {Card, Switch} from 'react-native-paper';
import home_img from '../assets/home_image.png'
import CardHome from "../components/CardHome";

export default function Home() {

    return (
        <SafeAreaProvider style={styles.container}>
            <HeaderInfo title='¡Bienvenido a casa Erick!' subtitle='Controla tus dispositivos desde aquí.'/>
            <View style={styles.center}>
               <CardHome/>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FDF9FF',
        marginHorizontal: 20,
        marginTop: 20,
    },
    center:{
        alignItems: 'center',
        marginTop: 40
    },

});