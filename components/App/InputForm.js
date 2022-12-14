import { View, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";
import Colors from "../../constants/colors";
import Input from "../../components/UI/Input"
import PrimaryButton from "../../components/UI/PrimaryButton";

function InputForm({onSubmit}) {
  const [inputValues, setInputValues] = useState({
    description: '',
    phrasePt: '',
    phraseEn: '',
    audio: ''
  });

  const inputChangedValueHandler = (inputIdentifier, enteredValue) => {
    setInputValues((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue
      };
    });
  }

  const submitHandler = () => {
     if (
      inputValues.description === "" ||
      inputValues.phrasePt === "" ||
      inputValues.phraseEn === "" ||
      inputValues.audio === ""
    ) {
      Alert.alert("Atenção", "Preencha todos os campos!", [
        { text: "Ok", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    const phraseData = {
      description: inputValues.description,
      phrasePt: inputValues.phrasePt,
      phraseEn: inputValues.phraseEn,
      audio: ''
    }

    onSubmit(phraseData);
  }  

  const resetInputHandler = () => {
    setInputValues({description: ''})
    setInputValues({phrasePt: ''})
    setInputValues({phraseEn: ''})
  }

  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <View>
          <Text style={styles.description}>Cadastro de frases</Text>
        </View>
      </View>
      <View style={styles.detailContainer}>
        <Input
          label="Atividade:"
          onUpdateValue={inputChangedValueHandler.bind(this, "description")}
          value={inputValues.description}
          keyboardType="default"
        />
        <Input
          label="Frase Português:"
          onUpdateValue={inputChangedValueHandler.bind(this, "phrasePt")}
          value={inputValues.phrasePt}
          keyboardType="default"
        />
        <Input
          label="Frase Inglês:"
          onUpdateValue={inputChangedValueHandler.bind(this, "phraseEn")}
          value={inputValues.phraseEn}
          keyboardType="default"
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Limpar</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={submitHandler}>Cadastrar</PrimaryButton>
          </View>
        </View>        
      </View>
    </View>
  );
}

export default InputForm;

const styles = StyleSheet.create({
  topbar: {
    height: 80,
    backgroundColor: Colors.primary800,
  },
  description: {
    marginTop: 40,
    marginLeft: 14,
    color: Colors.white,
    fontFamily: 'open-sans-bold',
    fontSize: 18
  },
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
  },
  buttonsContainer:{
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 5
  },
  buttonContainer:{
    flex: 1
  }
});
