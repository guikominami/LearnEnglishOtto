import { View, Text, TextInput, StyleSheet } from 'react-native';

import Colors from '../../constants/colors';

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
}) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        autoCapitalize={false}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    fontSize: 22,
    color: Colors.primary700,
    fontFamily: "open-sans",
    marginHorizontal: 10,
    marginBottom: 5
  
  },
  input:{
    fontSize: 20,
    backgroundColor: Colors.primary600,
    color: Colors.primary700,
    marginHorizontal: 10,
    textAlign: "left",
    padding: 10,
  },  
});
