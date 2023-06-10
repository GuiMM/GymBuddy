import * as React from 'react';
import { StyleSheet, View, Text, Button } from "react-native";
import Video from 'react-native-video';
//import video from '../../../assets/videoExercises/supino.mp4';

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."; 
const subTitle = "Supino barra"

export default function ExerciseSetScreen({ navigation }) {
  
  const videoRef = React.useRef(null);
    return (
        <View style={{ flex: 1, marginTop: 200, marginHorizontal:20}}>
          <Text style={styles.title}>
            Serie A
          </Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
          <Text style={styles.description}>{description}</Text>
          <Video  
            ref={videoRef}
            source={{
              uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
            }}
            paused={false}                  // make it start    
            repeat={true}                   // make it a loop
        />
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
  title:{
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    display: 'flex',
    alignContent: 'flex-start',
    color: '#141823'
  },
  subTitle:{
    fontSize: 20,
    marginTop:20,
    fontWeight: 'bold',
    display: 'flex',
    alignContent: 'flex-start',
    color: '#141823'
  },
  description:{
    fontSize: 15,
    marginTop:10,
    display: 'flex',
    alignContent: 'flex-start',
    color: '#9399a3'
  }
});
