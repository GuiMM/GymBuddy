import { View, Text, Button } from "react-native";



export default function ExerciseSetScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Voltar"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
}