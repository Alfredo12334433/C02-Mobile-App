import React from "react";
import {Image, Text, View, StyleSheet, ScrollView,} from "react-native";
import login_image from '../assets/login_image.png';
import { Button} from "react-native-elements";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import InputLogin from "../components/InputLogin";
import HeaderInfo from "../components/HeaderInfo";

export default function Login() {

    return (


        <SafeAreaProvider style={styles.container}>
            <ScrollView>
                <View style={styles.center}>
                    <Image source={login_image} style={styles.image}/>
                </View>
                <View style={styles.info}>
                    <HeaderInfo title='Inicia sesión' subtitle='¡Bivenenido de nuevo!'/>
                    <InputLogin/>
                    <View style={styles.forgetPassword}>
                        <Text style={styles.subtitle}>¿Olvidaste tú contraseña? </Text>
                    </View>

                    <View style={styles.center}>
                        <Button
                            title="Ingresar"
                            buttonStyle={styles.buttonStyle}
                            containerStyle={styles.containerStyle}
                        />
                    </View>
                    <View style={styles.getAccount}>
                        <Text style={styles.subtitle}>¿Todavía no tienes una cuenta? <Text style={styles.innerText}>Obten
                            una aquí</Text> </Text>
                    </View>
                </View>
            </ScrollView>

        </SafeAreaProvider>
    )
}


const styles = StyleSheet.create({

  container:{
      backgroundColor: '#FDF9FF'
  },
    center: {
        alignItems: 'center',

    },
    image: {
        width: 200,
        height: 250,
    },
    info: {
        marginHorizontal: 20
    },
    buttonStyle: {
        backgroundColor: '#a100e4',
        borderColor: 'white',
        borderRadius: 30,
        paddingVertical: 10
    },
    containerStyle: {
        width: 250,
        marginHorizontal: 0,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 6,
        borderRadius: 30
    },
    forgetPassword: {
        alignItems: 'flex-end'
    },
    getAccount: {
        alignItems: 'center',
        marginTop: 5
    },
    innerText: {
        color: '#a100e4',
        fontWeight: 'bold'
    }


});