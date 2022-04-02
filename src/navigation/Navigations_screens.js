import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { NavigationContainer } from '@react-navigation/native';



//Screens 
import Login from "../screens/Login";

const{ Navigator, Screen } = createStackNavigator;
// const Navigator_screens = () => (
//   <NavigationContainer>
//     <Navigator initialRouteName="Login">
//         <Screen name="Login" component={Login}></Screen>  
//     </Navigator>

//   </NavigationContainer>

// )


export default function Navigation() {

  return (
    <NavigationContainer>
    <Navigator initialRouteName="Login">
        <Screen name="Login" component={Login}></Screen>  
    </Navigator>

  </NavigationContainer>

  );

}
