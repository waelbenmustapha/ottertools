import React from "react";
import { AppProvider } from "./context/AppProvider";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "./screens/MainScreen";
import RectangleResult from "./screens/RectangleResult";
import CircleResult from "./screens/CircleResult";

const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <AppProvider>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Rectangle-result" component={RectangleResult} />
      <Stack.Screen name="Circle-result" component={CircleResult} />
      </Stack.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default App;
