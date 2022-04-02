import {Image, Text, View, StyleSheet, ScrollView} from "react-native";
import login_image from '../assets/login_image.png';
import { Button} from "react-native-elements";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import HeaderInfo from "../components/HeaderInfo";
import {TextInput} from 'react-native-paper';
import Icon from "react-native-vector-icons/Ionicons";
import React, {useState, useEffect} from "react";
import {useFormik} from "formik";
import * as Yup from "yup"
import axios from "axios"
// import useStable from "react-native-web/dist/modules/useStable";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login(props){

    const {navigation} = props;
    const [error, setError] = useState("")
    const formik = useFormik({
        initialValues: initialValues(), validationSchema: Yup.object(validationSchema()),
        onSubmit: (formInfo) => {         
            // axios.post('http://192.168.100.188:8000/api/login', formInfo)
            // axios.post('http://10.108.97.79:8000/api/login', formInfo)
            axios.post('http:// 192.168.1.75:8000/api/login', formInfo)
           
                .then(response => {
                    console.log(response.data.data)
                    saveData(response.data.data)

                    navigation.navigate('Home')

                })
                .catch(error => {
                    console.log(error.response.data)
                    setError('Credenciales incorrectas')
                });
        }


    })
    useEffect ( ()=>{
        readData()
        
    },[])

    const saveData = async ({token}) => {
        try {
            await AsyncStorage.setItem('token', token)
        } catch (e) {
            console.log(e)
        }
    }
    const readData = async () => {
        try {
            const userAge = await AsyncStorage.getItem('token')

            if (userAge !== null) {
                navigation.navigate('Home')
            }
        } catch (e) {

        }
    }
    const onPress = () => {
        navigation.navigate('Register')
      };

    return (

        <SafeAreaProvider style={styles.container}>
            <ScrollView>
                <View style={styles.center}>
                    <Image source={login_image} style={styles.image}/>
                </View>
                <View style={styles.info}>
                    <HeaderInfo title='Inicia sesión' subtitle='¡Bivenenido de nuevo!'/>
                    <TextInput
                placeholder="Correo electronico"
                rightIcon={<Icon name="mail" size={20}/>}
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.containerStyle1}
                rightIconContainerStyle={styles.leftIconContainerStyle}
                inputStyle={styles.inputStyle}
                value={formik.values.email}
                onChangeText={text => formik.setFieldValue('email', text)}
                type='outlined'
                style={styles.divider}

            />
<TextInput
                placeholder="Contraseña"
                rightIcon={<Icon name="eye" size={20}/>}
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.containerStyle2}
                rightIconContainerStyle={styles.leftIconContainerStyle}
                value={formik.values.password}
                onChangeText={text => formik.setFieldValue('password', text)}
                inputStyle={styles.inputStyle}

            />
            
                    <View style={styles.forgetPassword}>
                        <Text style={styles.subtitle}>¿Olvidaste tú contraseña? </Text>
                    </View>

                    <View style={styles.center}>
                    <Button
                            mode="contained" onPress={formik.handleSubmit}
                            title="Ingresar"
                            buttonStyle={styles.buttonStyle}
                            containerStyle={styles.containerStyle}
                />
                    </View>
                    <View style={styles.getAccount}>
                        <Text  style={styles.subtitle}>¿Todavía no tienes una cuenta?</Text>
                        <Button
                                onPress={onPress} 
                            // onPress={() => {
                                
                            // //   alert('Ir a la humedad');
                            //    }}
                             title="Obten una aquí"    
                            buttonStyle={styles.buttonStyle}
                            containerStyle={styles.containerStyle}
                          />

                        {/* <Text style={styles.innerText}>Obten
                            una aquí</Text>  */}
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

function initialValues() {
    return {
        email: 'admin@softui.com',
        password: 'secret',

    }}

    function validationSchema() {
        return {
            password: Yup.string().required('Nombre obligatorio'),
            email: Yup.string().required('Campo obligatorio').email('Email debe ser valido'),
    
        }
    }