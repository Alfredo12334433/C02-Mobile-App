import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import home_img from "../assets/home_image.png";
import {Card, Switch} from "react-native-paper";


export default function CardHome() {

    return (
        <Card style={styles.card}>
        <View style={styles.row}>
            <Image source={home_img} style={styles.img}/>
            <Switch
                value={true}
                color='#00DBA4'
                style={styles.switch}
            />
        </View>
        <View style={styles.cardInfo}>
            <Text style={styles.title}>
                Controlador de C02
            </Text>
            <Text style={styles.paragraph}>
                Permite controlar el sistema de C02
            </Text>
        </View>
    </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 6,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    img: {
        width: 200,
        height: 200,
    },
    switch: {
        marginTop: 15,
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16

    },
    paragraph: {
        fontSize: 15
    },
    cardInfo: {
        padding: 10
    }
});