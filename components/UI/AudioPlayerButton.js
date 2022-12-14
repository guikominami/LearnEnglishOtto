import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Entypo } from "@expo/vector-icons";
import Colors from '../../constants/colors';
import { Audio } from 'expo-av';

function AudioPlayerButton({ audio, color }){

  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(audio);

    setSound(sound);

    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;      
  }, [sound]);

  return(
    <View>
      <Entypo 
        android_ripple={{color: '#cccccc'}}                    
        name="sound" 
        size={32} 
        color={color}
        onPress={playSound} 
      />
    </View>    
  );
}

export default AudioPlayerButton;
