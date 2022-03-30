// import {Input} from "react-native-elements";
// import Icon from "react-native-vector-icons/Ionicons";
// import React, {useState, useEffect} from "react";
// import {SafeAreaView, StyleSheet, Text, View, Image, TouchableWithoutFeedback} from "react-native";
// import {TextInput} from 'react-native-paper';
// import { Button} from "react-native-elements";
// import {useFormik} from "formik";
// import * as Yup from "yup"
// import axios from "axios";
// // import useStable from "react-native-web/dist/modules/useStable";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// export default function InputLogin() {
//     // function initialValues() {
//     //     return {
//     //         email: '',
//     //         password: '',
    
//     //     }
//     // }
    
//     // function validationSchema() {
//     //     return {
//     //         password: Yup.string().required('Nombre obligatorio'),
//     //         email: Yup.string().required('Campo obligatorio').email('Email debe ser valido'),
    
//     //     }
//     // }
//     // const [error, setError] = useState("")
//     // const formik = useFormik({
//     //     initialValues: initialValues(), validationSchema: Yup.object(validationSchema()),
//     //     onSubmit: (formInfo) => {

//     //         const headers = {
//     //             'Accept': 'application/json',
//     //             'Content-Type': 'application/json'
//     //         }
//     //         axios.post('http://10.108.97.79:8000/api/login', formInfo)
//     //             .then(response => {
//     //                 console.log(response)
//     //                 saveData(response.data)

//     //                 navigation.navigate('Navigator')

//     //             })
//     //             .catch(error => {
//     //                 console.log(error.response.data)
//     //                 setError('Credenciales incorrectas')
//     //             });
//     //     }


//     // })
//     // useEffect ( ()=>{
//     //     readData()
        
//     // },[])

//     // const saveData = async ({token}) => {
//     //     try {
//     //         await AsyncStorage.setItem('token', token)
//     //     } catch (e) {
//     //         console.log(e)
//     //     }
//     // }
//     // const readData = async () => {
//     //     try {
//     //         const userAge = await AsyncStorage.getItem('token')

//     //         if (userAge !== null) {
//     //             navigation.navigate('Navigation')
//     //         }
//     //     } catch (e) {

//     //     }
//     // }

    

//     return (

//         <View style={styles.form}>

            

// {/* <TextInput
//                 placeholder="Correo electronico"
//                 rightIcon={<Icon name="mail" size={20}/>}
//                 inputContainerStyle={styles.inputContainerStyle}
//                 containerStyle={styles.containerStyle1}
//                 rightIconContainerStyle={styles.leftIconContainerStyle}
//                 inputStyle={styles.inputStyle}
//                 value={formik.values.email}
//                 onChangeText={text => formik.setFieldValue('email', text)}
//                 type='outlined'
//                 style={styles.divider}

//             />
// <TextInput
//                 placeholder="Contraseña"
//                 rightIcon={<Icon name="eye" size={20}/>}
//                 inputContainerStyle={styles.inputContainerStyle}
//                 containerStyle={styles.containerStyle2}
//                 rightIconContainerStyle={styles.leftIconContainerStyle}
//                 value={formik.values.password}
//                 onChangeText={text => formik.setFieldValue('password', text)}
//                 inputStyle={styles.inputStyle}

//             /> */}
//                  {/* <Button
//                             mode="contained" onPress={formik.handleSubmit}
//                             title="Ingresar"
//                             buttonStyle={styles.buttonStyle}
//                             containerStyle={styles.containerStyle}
//                 /> */}

//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     form: {
//         marginTop: 20
//     },
//     inputContainerStyle: {
//         borderRadius: 10,
//         borderWidth: 1,
//         // borderColor: '#a100e4'

//     },

//     containerStyle1: {
//         // borderWidth: 1,
//         paddingHorizontal: 0,
//         paddingVertical: 0,
//         height: 60,
//         marginBottom: 30
//     },
//     containerStyle2: {
//         // borderWidth: 1,
//         paddingHorizontal: 0,
//         paddingVertical: 0,
//         height: 60,
//         marginBottom: 5
//     },

//     leftIconContainerStyle: {
//         marginRight: 10
//     },
//     inputStyle: {
//         paddingLeft: 10,
//         fontSize: 15
//     },
// })