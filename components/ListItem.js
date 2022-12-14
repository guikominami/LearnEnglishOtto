import { View, Text, StyleSheet } from "react-native";
import { Entypo } from "@expo/vector-icons";

import AudioPlayerButton from "./UI/AudioPlayerButton";
import Colors from "../constants/colors";

function ListItem({ description, audio, onPress }) {
  return (
    <View style={styles.listItem}>
      <View style={styles.outerContainer}>
        <View style={styles.descriptionContainer}>
          <Text style={styles.itemText} adjustsFontSizeToFit numberOfLines={2}>
            {description}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Entypo
            android_ripple={{ color: "#cccccc" }}
            name="chevron-right"
            size={32}
            color={Colors.primary700}
            onPress={onPress}
            style={styles.icon}
          />
          <AudioPlayerButton 
            audio={audio} 
            color={Colors.primary700}
          />
        </View>
      </View>
    </View>
  );
}

export default ListItem;

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: "row",
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 4,
    marginHorizontal: 8,
    backgroundColor: Colors.primary600,
    elevation: 4,
    //flexWrap: 'wrap',
  },
  outerContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 3    
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  icon: {
    paddingLeft: 10
  },
});
