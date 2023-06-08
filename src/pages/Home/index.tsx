import { View, Text, Button } from "react-native";



export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Serie"
          onPress={() => navigation.navigate('ExerciseSet')}
        />
      </View>
    );
}