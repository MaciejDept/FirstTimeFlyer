import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import HelloWorldScreen from './screens/HelloWorldScreen';

// Create the stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen 
          name="WelcomeScreen" 
          component={WelcomeScreen} 
          options={{ headerShown: false }}  // Hide header for this screen
        />
        <Stack.Screen 
          name="HelloWorldScreen" 
          component={HelloWorldScreen} 
          options={{ headerShown: false }}  // Hide header for this screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
