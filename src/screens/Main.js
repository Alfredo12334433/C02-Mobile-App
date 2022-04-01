import React, {Component} from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import {LineChart } from 'react-native-chart-kit'
import { ProgressChart } from "react-native-chart-kit";
import { Button} from "react-native-elements";
const screenWidth = Dimensions.get("window").width;


export default function Main (){
  
   const data = {
    labels: ["Apple", "Banana", "Cherry"], // optional
    data: [0.2, 0.5, 0.8]
  };
        return(
          <View style={style.MainContainer}>
 
          <ProgressChart
            data={data}
            width={ screenWidth - 15 }
            height={220}
            chartConfig={{
              //backgroundColor: '#478438',
              backgroundGradientFrom: '#FFFFFF',
              backgroundGradientTo: '#FFFFFF',
              //decimalPlaces: 2,
              color: (opacity = 1) => `rgba(128, 0, 128, ${opacity})`,
            }}
            style= {{
              borderRadius: 15,
            }}
          />
     
          <Text style={{ fontSize: 28, textAlign: 'center' }}></Text>

          <Button
           onPress={() => {
             alert('Ir a la humedad');
              }}
            title="Humedad"    
            buttonStyle={style.buttonStyle}
            containerStyle={style.containerStyle}
          />
     
        </View>
        
        )
        
    }
const style = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
}
 
});
