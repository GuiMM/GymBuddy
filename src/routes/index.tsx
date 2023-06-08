import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import AppRoutes from './app.routes';
import Logo from '../../assets/favicon.png';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import ExerciseSet from '../pages/ExerciseSet'

const App = createStackNavigator();
export default function Routes() {
  return (
  
        <App.Navigator
        screenOptions={{
            headerShown: true,
            cardStyle: { backgroundColor: '#EBEEF8' },
        }}
        initialRouteName="Home"
        >
             <App.Screen
                options={{
                    headerShown: true,
                    headerTransparent: true
                }}
                name="Home"
                component={Home}
                />
                <App.Screen
                options={{
                    headerShown: true,
                    headerTransparent: true
                }}
                name="ExerciseSet"
                component={Home}
                />


        </App.Navigator>
  )

};
