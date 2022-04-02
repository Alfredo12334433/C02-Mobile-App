import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Main from '../screens/Main';
import Place from '../screens/Place';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Drawer from "../navigation/Drawer"

const Tab = createBottomTabNavigator();

export default function Navigation() {

    return (
        
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} options={{
                    title: "",
                  headerShown: false,
          tabBarShowLabel: false,
                    tabBarLabel: "Login",
                    tabBarStyle: {backgroundColor: '#AD40AF'},
                    tabBarInactiveTintColor: '#fff',
                    tabBarActiveTintColor: 'yellow',
                    tabBarIcon: ({color, size}) => <Ionicons name="person-circle-outline" color={color} size={size}/>,
                }}/>

                <Tab.Screen name="Home" component={Home} options={{
                    title: "",
                  headerShown: false,
                    tabBarShowLabel: false,
                    tabBarLabel: "Home",
                    tabBarStyle: {backgroundColor: '#AD40AF'},
                    tabBarInactiveTintColor: '#fff',
                    tabBarActiveTintColor: 'yellow',
                    tabBarIcon: ({color, size}) => <Ionicons name="ios-home-outline" color={color} size={size}/>,
                }}/>
                
                <Tab.Screen name="Register" component={Register} options={{
                    title: "",
                  headerShown: false,
          tabBarShowLabel: false,
                    tabBarLabel: "Register",
                    tabBarStyle: {backgroundColor: '#AD40AF'},
                    tabBarInactiveTintColor: '#fff',
                    tabBarActiveTintColor: 'yellow',
                    tabBarIcon: ({color, size}) => <Ionicons name="ios-person-add-sharp" color={color} size={size}/>,
                }}/>
                   <Tab.Screen name="Main" component={Main} options={{
                    title: "",
                  headerShown: false,
          tabBarShowLabel: false,
                    tabBarLabel: "Main",
                    tabBarStyle: {backgroundColor: '#AD40AF'},
                    tabBarInactiveTintColor: '#fff',
                    tabBarActiveTintColor: 'yellow',
                    tabBarIcon: ({color, size}) => <Ionicons name="bar-chart" color={color} size={size}/>,
                }}/> 

                 {/* <Tab.Screen name="Place" component={Place} options={{
                    title: "",
                  headerShown: false,
          tabBarShowLabel: false,
                    tabBarLabel: "Place",
                    tabBarStyle: {backgroundColor: '#AD40AF'},
                    tabBarInactiveTintColor: '#fff',
                    tabBarActiveTintColor: 'yellow',
                    tabBarIcon: ({color, size}) => <Ionicons name="settings-outline" color={color} size={size}/>,
                }}/>  */}

            </Tab.Navigator>
        </NavigationContainer>
    );

}