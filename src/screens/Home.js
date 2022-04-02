import React from "react";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {StyleSheet, View, Text, Image,TouchableWithoutFeedback,TouchableHighlight} from "react-native";
import HeaderInfo from "../components/HeaderInfo";
import {Card, Switch} from 'react-native-paper';
import home_img from '../assets/home_image.png'
import CardHome from "../components/CardHome";

export default function Home(props) {
    const {navigation} = props;
    console.log(navigation);

    const onPress = () => {
        navigation.navigate('Main')
      };
    return (
        <SafeAreaProvider style={styles.container}>
            <HeaderInfo title='¡Bienvenido a casa Erick!' subtitle='Controla tus dispositivos desde aquí.'/>
            <View style={styles.center}>
            <TouchableHighlight onPress={onPress} underlayColor="white">
               <CardHome />
            </TouchableHighlight>
            </View>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#FDF9FF',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    center:{
        alignItems: 'center',
        marginTop: 40
    },
    

});