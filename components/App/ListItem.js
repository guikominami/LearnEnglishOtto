import { View, Text, StyleSheet } from "react-native";
import IconButton from "../UI/IconButton";
import AudioPlayerButton from "../UI/AudioPlayerButton";
import Colors from "../../constants/colors";

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
          <View style={styles.icon}>
            <IconButton
              type={"chevron-right"}
              color={Colors.primary700}
              action={onPress}
            />
          </View>
          <View style={styles.icon}>
            <AudioPlayerButton audio={audio} color={Colors.primary700} />
          </View>
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
    borderColor: Colors.primary700,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 4,
    marginHorizontal: 8,
    backgroundColor: Colors.primary500,
    elevation: 4,
    //flexWrap: 'wrap',
  },
  outerContainer: {
    flex: 1,
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,    
    paddingLeft: 16,        
    justifyContent: "space-between",
    alignItems: "center",
  },
  descriptionContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginRight: 10
  },
  buttonContainer: {
    flexDirection: "row-reverse",
  },
  itemText: {
    fontWeight: "bold",
    fontSize: 20,
  },
  icon: {
    marginHorizontal: 7
  },
});
