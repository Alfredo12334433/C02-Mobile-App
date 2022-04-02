import React, {useState, useEffect} from "react";
import {StyleSheet, Text, View,} from "react-native";
import { Button, CheckBox,Input} from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";
import {SafeAreaProvider} from 'react-native-safe-area-context'
import HeaderInfo from "../components/HeaderInfo";
import InputRegister from "../components/InputRegister";
import {useFormik} from "formik";
import * as Yup from "yup"
import axios from "axios";


export default function Register(props) {
    const {navigation} = props;
    const [error, setError] = useState("")
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        
        onSubmit: (formInfo) => { 
            // axios.post('http://192.168.100.188:8000/api/crear', formInfo)        
            axios.post('http://192.168.1.75:8000/api/crear', formInfo)
                .then(response => {
                    saveData(response.data.data)
                    navigation.navigate('Home')

                })
                .catch(error => {
                    console.log(error.response.data)
                    setError(error.response.data)
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
    

    const [check1, setCheck1] = useState(false);
    return (
        <SafeAreaProvider style={styles.container}>
            <HeaderInfo title='Crear una cuenta'
                        subtitle='Crea una cuenta para controlar tú medidor de C02 a  través de tú móvil'/>
            <View style={styles.form}>
            <Input
                label="Nombre"
                labelStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.containerStyle}
                rightIconContainerStyle={styles.leftIconContainerStyle}
                value={formik.values.name}
                onChangeText={text => formik.setFieldValue('name', text)}
                type='outlined'

            />
            <Input
                label="Correo electronico"
                labelStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.containerStyle}
                rightIconContainerStyle={styles.leftIconContainerStyle}
                value={formik.values.email}
                onChangeText={text => formik.setFieldValue('email', text)}
                type='outlined'


            />
            <Input
                label="Contraseña"
                labelStyle={styles.inputStyle}
                inputContainerStyle={styles.inputContainerStyle}
                containerStyle={styles.containerStyle1}
                rightIconContainerStyle={styles.leftIconContainerStyle}
                value={formik.values.password}
                onChangeText={text => formik.setFieldValue('password', text)}
                inputStyle={styles.inputStyle}


            />

        </View>
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
                 mode="contained" onPress={formik.handleSubmit}
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 6,
        borderRadius: 30},
    nestedText:{
        color: '#a100e4',
        fontWeight: 'bold'
    },
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
});
function initialValues() {
    return {
        name:'',
        email: '',
        password: '',

    }}

    function validationSchema() {
        return {
            name: Yup.string().required('Nombre obligatorio'),
            password: Yup.string().required('contraseña obligatorio'),
            email: Yup.string().required('Campo obligatorio').email('Email debe ser valido'),
    
        }
    }