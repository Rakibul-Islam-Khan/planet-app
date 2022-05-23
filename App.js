import React from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Text from "./src/components/text/text";
import Details from "./src/screens/Details";
import { colors } from "./src/theme/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    "Antonio-Medium": require("./assets/fonts/Antonio-Medium.ttf"),
    "Spartan-Regular": require("./assets/fonts/Spartan-Regular.ttf"),
    "Spartan-Bold": require("./assets/fonts/Spartan-Bold.ttf"),
  });
  if (!loaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor={colors.black} />
    </>
  );
}
