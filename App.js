import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";

import ListScreen from "./screens/ListScreen";
import DetailScreen from "./screens/DetailScreen";
import InputScreen from "./screens/InputScreen";
import Colors from "./constants/colors";


const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });  

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.primary800 },
          headerTintColor: "white",
          contentStyle: { backgroundColor: Colors.primary700 },
        }}
      >
        <Stack.Screen
          name="ListScreen"
          component={ListScreen}
          options={{ title: "Lista de frases" }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{ title: "Detalhe" }}
        />
        <Stack.Screen
          name="InputScreen"
          component={InputScreen}
          options={{ title: "Cadastro" }}
        />                
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
