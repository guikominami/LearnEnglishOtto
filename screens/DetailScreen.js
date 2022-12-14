import { View, Text, StyleSheet } from "react-native";
import AudioPlayerButton from "../components/UI/AudioPlayerButton";
import Colors from "../constants/colors";

function DetailScreen({ route }){
  return(
    <View style={styles.detailContainer}>
      <Text style={styles.title}>
        Atividade:
      </Text>
      <Text style={styles.item}>
        {route.params.description}
      </Text>
      <Text style={styles.title}>
        Frase Português:
      </Text>
      <Text style={styles.item}>
        {route.params.phrasePt}
      </Text>
      <Text style={styles.title}>
        Frase Inglês:
      </Text>
      <Text style={styles.item}>
        {route.params.phraseEn}
      </Text>
      <Text style={styles.title}>
        Ouça a frase:
      </Text>      
      <AudioPlayerButton 
        audio={route.params.audio} 
        color={Colors.primary500}
      />
    </View>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 25,
    color: Colors.primary600,
    fontFamily: "open-sans-bold",
  },
  item:{
    fontSize: 25,
    color: Colors.primary500,
    fontFamily: "open-sans",
    marginBottom: 30,    
  }
});