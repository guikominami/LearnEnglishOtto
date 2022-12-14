import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import { PHRASES } from "../data/data";
import ListItem from "../components/ListItem";
import jsonData from '../data/phraseData.json';

const ListScreen = ({ navigation }) => {
  const listItems = jsonData;

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
          data={listItems.sort((a, b) => a.description.localeCompare(b.description))}
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
