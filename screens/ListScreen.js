import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { PHRASES } from "../data/data";
import ListItem from "../components/ListItem";

function ListScreen({ navigation }) {

  function renderCategoryItem(itemData) {
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
          data={PHRASES}
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
