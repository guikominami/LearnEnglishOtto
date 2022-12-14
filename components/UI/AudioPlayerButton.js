import * as React from 'react';
import { View } from 'react-native';
import { Audio } from 'expo-av';
import IconButton from './IconButton';

const AudioPlayerButton = ({ audio, color }) => {
  
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
      <IconButton 
        type={"sound"} 
        color={color} 
        action={playSound} 
      />
    </View>    
  );
}

export default AudioPlayerButton;
