import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import ResultPage from "./pages/ResultPage";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import SearchPage from "./pages/SearchPage";
import AddPage from "./pages/AddPage";
import MapsPage from "./pages/MapsPage"

export default function App() {
  const Drawer = createDrawerNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Accueil" component={ResultPage} />
          <Drawer.Screen name="Ajouter un lieu" component={AddPage} />
          <Drawer.Screen name="Trouver un lieu" component={SearchPage} />
          <Drawer.Screen name="Localiser un lieu" component={MapsPage} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
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
