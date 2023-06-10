import React from 'react';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AppRoutes from './app.routes';
import Home from '../pages/Home';
import ExerciseSet from '../pages/ExerciseSet'

const App = createNativeStackNavigator();
export default function Routes() {
  return (
        <App.Navigator
        screenOptions={{
            headerShown: true,
            contentStyle: { backgroundColor: '#eb4034' },
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
                component={ExerciseSet}
                />

        </App.Navigator>
  )

};
