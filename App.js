import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Routes from './src/routes';
import AppContainer from './src/hooks';

import Home from './src/pages/Home';
import ExerciseSet from './src/pages/ExerciseSet'

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
        <MyStack />
      </NavigationContainer>
  );
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <AppContainer>
//         <Text>dsadsadsadsadasd</Text>
//         <StatusBar style="auto" />
//         <Routes />
//       </AppContainer>
//     </View>
//   );
// }


function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: true,
        contentStyle: { backgroundColor: '#eb4034' },
    }}
    initialRouteName="Home"
    >
         <Stack.Screen
            options={{
                headerShown: true,
                headerTransparent: true
            }}
            name="Home"
            component={Home}
            />
            <Stack.Screen
            options={{
                headerShown: true,
                headerTransparent: true
            }}
            name="ExerciseSet"
            component={ExerciseSet}
            />

    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
