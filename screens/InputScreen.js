import InputForm from "../components/App/InputForm";
import { useContext } from "react";
import { PhraseContext } from "../store/phrase-context";

const InputScreen = ({ navigation, description, phrasePt, phraseEn, audio }) => {
  const phraseCtx = useContext(PhraseContext);
  
  //RECEBE PARAMETRO DO INPUT FORM
  const submitHandler = (phraseData) => {
    phraseCtx.addPhrase(phraseData);
    navigation.goBack();
  }

  return (
    <InputForm onSubmit={submitHandler} />
  );
}

export default InputScreen;