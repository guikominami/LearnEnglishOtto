import { StyleSheet, View, Text, Pressable } from 'react-native';

import Colors from '../../constants/colors';

function PrimaryButton({ children, onPress }){
  return(
    <View style={styles.buttonOuterContainer}>    
      <Pressable 
        style={styles.buttonInnerContainer} 
        onPress={onPress} 
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text numberOfLines={1} style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>    
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden'
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary700,
    paddingVertical: 8,
    paddingHorizontal: 36,
    elevation: 2
  },
  buttonText: {
    fontFamily: "open-sans",    
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
});