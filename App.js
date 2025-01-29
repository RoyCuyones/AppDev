import React from "react"; // UI Library sa React
import { StyleSheet } from "react-native"; // Import StyleSheet from react-native
import { NavigationContainer } from "@react-navigation/native"; // Package for navigation container
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Create native stack navigator

// Import Component Screens
import LandingPage from "./components/landingPage";

const Stack = createNativeStackNavigator(); // Initialize stack navigator

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LandingPage" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
