import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from "../screens/Home";
import Register from "../screens/Register";
import Login from "../screens/Login";
import Ionicons from 'react-native-vector-icons/Ionicons';
import Place from '../screens/Place';

const Tab = createBottomTabNavigator();

export default function Navigation() {

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} options={{
                    title: "",
                    headerTransparent: true,
                    tabBarActiveTintColor: '#a100e4',
                    tabBarLabel: "Profile",
                    tabBarIcon: ({color, size}) => <Ionicons name="person-circle-outline" color={color} size={size}/>,
                }}/>
                <Tab.Screen name="Home" component={Home} options={{
                    title: "",
                    headerTransparent: true,
                    tabBarActiveTintColor: '#a100e4',
                    tabBarLabel: "Profile",
                    tabBarIcon: ({color, size}) => <Ionicons name="home-outline" color={color} size={size}/>,
                }}/>
                <Tab.Screen name="Settings" component={Register} options={{
                    title: "",
                    headerTransparent: true,
                    tabBarActiveTintColor: '#a100e4',
                    tabBarLabel: "Settings",
                    tabBarIcon: ({color, size}) => <Ionicons name="settings-outline" color={color} size={size}/>,
                }}/>

                 <Tab.Screen name="Place" component={Place} options={{
                    title: "",
                    headerTransparent: true,
                    tabBarActiveTintColor: '#a100e4',
                    tabBarLabel: "Place",
                    tabBarIcon: ({color, size}) => <Ionicons name="settings-outline" color={color} size={size}/>,
                }}/> 

            </Tab.Navigator>
        </NavigationContainer>
    );

}