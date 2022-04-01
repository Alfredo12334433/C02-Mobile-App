import React, {useEffect, useState} from "react";

import {SafeAreaProvider} from 'react-native-safe-area-context'
import {ActivityIndicator, FlatList, Image, StyleSheet, Text, View,} from "react-native";
import place_image1 from '../assets/place_image1.png'
import DropDownPicker from 'react-native-dropdown-picker';
import {Button} from "react-native-elements";
import {Picker} from '@react-native-picker/picker';

export default function Place () {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState(1);
    const getUsuarios = async () => {
     try {
      // const response = await fetch('http://192.168.100.188:8000/api/lugares');
      const response = await fetch('http://10.108.97.79:8000/api/lugares');
      const json = await response.json();
      setData(json.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUsuarios();
  }, []);

    const renderProductList = () => {
    return data.map((data) => {
      return <Picker.Item label={data.name} value={data.id} key={data.id} />
    })
  }

    return (
        <SafeAreaProvider style={styles.container}>
            
            
      <View style={styles.center}>
      <Text style={styles.title}>¿En qué lugar colocarás tú controlador de C02?</Text>
      <Image source={place_image1} style={styles.image}/>
      {isLoading ? <ActivityIndicator/> : (

        <Picker
       
        selectedValue={selectedValue}
        style={{ height: 50, width: 150 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
             {renderProductList()}
        </Picker>

    
      )}
      
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