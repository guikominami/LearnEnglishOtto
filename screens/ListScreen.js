import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import ListItem from "../components/App/ListItem";
import { useContext } from "react";
import { PhraseContext } from "../store/phrase-context";

const ListScreen = ({ navigation }) => {

  const phraseCtx = useContext(PhraseContext);

  const renderCategoryItem = (itemData) => {
    function pressHandler() {
      navigation.navigate("DetailScreen", {
        phraseId: itemData.item.id,
        description: itemData.item.description,
        phrasePt: itemData.item.phrasePt,
        phraseEn: itemData.item.phraseEn,
        audio: itemData.item.audio,
      });
    }

    return (
      <ListItem
        id={itemData.item.id}
        description={itemData.item.description}
        phrasePt={itemData.item.phrasePt}
        phraseEn={itemData.item.phraseEn}
        audio={itemData.item.audio}
        onPress={pressHandler}
      />
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.listContainer}>
        <FlatList
          data={phraseCtx.phrases.sort((a, b) => a.description.localeCompare(b.description))}
          keyExtractor={(item, index) => item.id}
          renderItem={renderCategoryItem}
          maxToRenderPerBatch={10}
        />
      </View>
    </SafeAreaView>
  );
}

export default ListScreen;

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 10,
  },
});
