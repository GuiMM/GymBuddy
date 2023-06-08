import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/routes';
import AppContainer from './src/hooks';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <AppContainer>
//         <StatusBar barStyle="light-content" backgroundColor="#312e38" />
//         <Text>Hello world!!! Im here</Text>
//         <Routes />
//       </AppContainer> 
//     </View>
//   );
// }

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer>
        <Text>dsadsadsadsadasd</Text>
        <StatusBar barStyle="light-content" backgroundColor="#312e38" />
        <Routes />
      </AppContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
