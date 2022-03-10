import React, {useState} from "react";
import {StyleSheet, Text, View,} from "react-native";
import { Button, CheckBox} from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import HeaderInfo from "../components/HeaderInfo";
import InputRegister from "../components/InputRegister";


export default function Register() {
    const [check1, setCheck1] = useState(false);
    return (
        <SafeAreaProvider style={styles.container}>
            <HeaderInfo title='Crear una cuenta'
                        subtitle='Crea una cuenta para controlar tú medidor de C02 a  través de tú móvil'/>
            <InputRegister/>
            <View style={styles.terms}>
                <CheckBox
                    containerStyle={{marginRight: 0}}
                    checkedIcon={
                        <Icon name="md-checkbox" size={20}/>
                    }
                    uncheckedIcon={
                        <Icon name="md-checkbox-outline" size={20}/>
                    }
                    checked={check1}
                    onPress={() => setCheck1(prevState => !prevState)}
                />
                <Text>Estoy de acuerdo con los  <Text style={styles.nestedText}>términos del servicio y polticas de privacidad </Text> </Text>

            </View>
            <View style={styles.center}>
                <Button
                    title="Crear cuenta"
                    buttonStyle={styles.buttonStyle}
                    containerStyle={styles.containerStyle}
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
    terms: {
        flexDirection: 'row',
        marginRight:20,
        alignItems: 'center'
    }
    , center: {
        alignItems: 'center',
        marginTop: 10
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
    },
    nestedText:{
        color: '#a100e4',
        fontWeight: 'bold'
    }
});