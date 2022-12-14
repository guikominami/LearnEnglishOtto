import { View, Text, StyleSheet } from "react-native";
import AudioPlayerButton from "../components/UI/AudioPlayerButton";
import Colors from "../constants/colors";
import IconButton from "../components/UI/IconButton";
import { useContext } from "react";
import { PhraseContext } from "../store/phrase-context";

const DetailScreen = ({ route, navigation }) => {
  const phraseCtx = useContext(PhraseContext);

  const editedId = route.params.phraseId;

  const deletePhrase = () => {
    phraseCtx.deletePhrase(editedId);
    //retornar à lista
    //navigation.navigate(ListScreen);
    navigation.goBack();
  };

  return (
    <View style={styles.detailContainer}>
      <View style={styles.firstContainer}>
        <View>
          <Text style={styles.title}>Atividade:</Text>
        </View>
        <View style={styles.rightContainer}>
          <IconButton 
            type={"trash"} 
            color={Colors.primary500} 
            action={deletePhrase} 
           />          
        </View>
      </View>
      <Text style={styles.item}>{route.params.description}</Text>
      <Text style={styles.title}>Frase Português:</Text>
      <Text style={styles.item}>{route.params.phrasePt}</Text>
      <Text style={styles.title}>Frase Inglês:</Text>
      <Text style={styles.item}>{route.params.phraseEn}</Text>
      <Text style={styles.title}>Ouça a frase:</Text>
      <AudioPlayerButton 
        audio={route.params.audio} 
        color={Colors.primary500} 
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  firstContainer: {
    flexDirection: "row",
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row-reverse'
  },
  title: {
    fontSize: 25,
    color: Colors.primary600,
    fontFamily: "open-sans-bold",
  },
  item: {
    fontSize: 25,
    color: Colors.primary500,
    fontFamily: "open-sans",
    marginBottom: 30,
  },
});
