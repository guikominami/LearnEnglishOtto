import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import ListScreen from "./screens/ListScreen";
import DetailScreen from "./screens/DetailScreen";
import InputScreen from "./screens/InputScreen";
import Colors from "./constants/colors";

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const StackNavigator = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { 
            backgroundColor: Colors.primary800, 
          },
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
    );
  };

  return (
    <NavigationContainer>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: Colors.primary800,
            borderTopWidth: 0,
            inactiveColor: "white",
          },
          tabBarInactiveTintColor: "white",
          tabBarActiveTintColor: Colors.primary600,
        }}
      >
        <BottomTab.Screen
          name="Lista de frases"
          component={StackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="document-text" color={color} size={size} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Cadastro"
          component={InputScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person" color={color} size={size} />
            ),
          }}
        />
      </BottomTab.Navigator>
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
