import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import PreTripScreen from './screens/PreTripScreen';
import FlightDayScreen from './screens/FlightDayScreen';
import LandingScreen from './screens/LandingScreen';
import ChecklistScreen from './screens/ChecklistScreen';

// Create the stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen 
          name="WelcomeScreen" 
          component={WelcomeScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="PreTripScreen" 
          component={PreTripScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="FlightDayScreen" 
          component={FlightDayScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="LandingScreen" 
          component={LandingScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ChecklistScreen" 
          component={ChecklistScreen} 
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
