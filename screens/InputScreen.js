import { View, StyleSheet, Text, Alert } from "react-native";
import { useState } from "react";
import Colors from "../constants/colors";
import Input from "../components/UI/Input";
import PrimaryButton from "../components/UI/PrimaryButton";

function InputScreen() {
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPhrasePt, setEnteredPhrasePt] = useState("");
  const [enteredPhraseEn, setEnteredPhraseEn] = useState("");

  const updateInputValueHandler = (inputType, enteredValue) => {
    switch (inputType) {
      case "description":
        setEnteredDescription(enteredValue);
        break;
      case "phrasePt":
        setEnteredPhrasePt(enteredValue);
        break;
      case "phraseEn":
        setEnteredPhraseEn(enteredValue);
        break;
    }
  }

  const submitHandler = () => {
    if (
      enteredDescription === "" ||
      enteredPhrasePt === "" ||
      enteredPhraseEn === ""
    ) {
      //show alert ...
      Alert.alert("Atenção", "Preencha todos os campos!", [
        { text: "Ok", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    console.log("cadastrar");
  }

  const resetInputHandler = () => {
    setEnteredDescription('');
    setEnteredPhraseEn('');
    setEnteredPhrasePt('');
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
          onUpdateValue={updateInputValueHandler.bind(this, "phrasePt")}
          value={enteredPhrasePt}
          keyboardType="default"
        />
        <Input
          label="Frase Português:"
          onUpdateValue={updateInputValueHandler.bind(this, "phrasePt")}
          value={enteredPhrasePt}
          keyboardType="default"
        />
        <Input
          label="Frase Inglês:"
          onUpdateValue={updateInputValueHandler.bind(this, "phraseEn")}
          value={enteredPhraseEn}
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

export default InputScreen;

const styles = StyleSheet.create({
  topbar: {
    height: 80,
    backgroundColor: Colors.primary800,
  },
  description: {
    marginTop: 40,
    marginLeft: 14,
    color: Colors.primary500,
    fontFamily: 'open-sans-bold',
    fontSize: 20
  },
  container: {
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
