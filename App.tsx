import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import HelloWorldScreen from './screens/HelloWorldScreen';

// Define navigation types
type RootStackParamList = {
  WelcomeScreen: undefined;
  HelloWorldScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="HelloWorldScreen" component={HelloWorldScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}