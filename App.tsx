import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/WelcomeScreen';
import PreTripScreen from './screens/PreTripScreen';
import PreTripAirportTransfer from './screens/PreTripAirportTransfer';
import PreTripBaggageCheck from './screens/PreTripBaggageCheck';
import PreTripCheckFlightDetails from './screens/PreTripCheckFlightDetails';
import PreTripHealthSafety from './screens/PreTripHealthSafety';
import PreTripOnlineCheckIn from './screens/PreTripOnlineCheckIn';
import PreTripPackYourBags from './screens/PreTripPackYourBags';
import PreTripSetTravelReminders from './screens/PreTripSetTravelReminders';
import FlightDayScreen from './screens/FlightDayScreen';
import FlightDayArriveAtAirport from './screens/FlightDayArriveAtAirport';
import FlightDayBoardPlane from './screens/FlightDayBoardPlane';
import FlightDayCheckIn from './screens/FlightDayCheckIn';
import FlightDayEnjoyFlight from './screens/FlightDayEnjoyFlight';
import FlightDayFindGate from './screens/FlightDayFindGate';
import FlightDaySecurityCheck from './screens/FlightDaySecurityCheck';
import FlightDayWaitForBoarding from './screens/FlightDayWaitForBoarding';
import LandingScreen from './screens/LandingScreen';
import LandingChooseTransport from './screens/LandingChooseTransport';
import LandingDisembarkPlane from './screens/LandingDisembarkPlane';
import LandingExitAirport from './screens/LandingExitAirport';
import LandingPassportControl from './screens/LandingPassportControl';
import LandingRetrieveLuggage from './screens/LandingRetrieveLuggage';
import ChecklistScreen from './screens/ChecklistScreen';
import Congratulations from './screens/Congratulations';
import IntroScreen from './screens/IntroScreen';

// Create the stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="WelcomeScreen">
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PreTripScreen" component={PreTripScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PreTripAirportTransfer" component={PreTripAirportTransfer} options={{ headerShown: false }} />
        <Stack.Screen name="PreTripBaggageCheck" component={PreTripBaggageCheck} options={{ headerShown: false }} />
        <Stack.Screen name="PreTripCheckFlightDetails" component={PreTripCheckFlightDetails} options={{ headerShown: false }} />
        <Stack.Screen name="PreTripHealthSafety" component={PreTripHealthSafety} options={{ headerShown: false }} />
        <Stack.Screen name="PreTripOnlineCheckIn" component={PreTripOnlineCheckIn} options={{ headerShown: false }} />
        <Stack.Screen name="PreTripPackYourBags" component={PreTripPackYourBags} options={{ headerShown: false }} />
        <Stack.Screen name="PreTripSetTravelReminders" component={PreTripSetTravelReminders} options={{ headerShown: false }} />
        <Stack.Screen name="FlightDayScreen" component={FlightDayScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FlightDayArriveAtAirport" component={FlightDayArriveAtAirport} options={{ headerShown: false }} />
        <Stack.Screen name="FlightDayBoardPlane" component={FlightDayBoardPlane} options={{ headerShown: false }} />
        <Stack.Screen name="FlightDayCheckIn" component={FlightDayCheckIn} options={{ headerShown: false }} />
        <Stack.Screen name="FlightDayEnjoyFlight" component={FlightDayEnjoyFlight} options={{ headerShown: false }} />
        <Stack.Screen name="FlightDayFindGate" component={FlightDayFindGate} options={{ headerShown: false }} />
        <Stack.Screen name="FlightDaySecurityCheck" component={FlightDaySecurityCheck} options={{ headerShown: false }} />
        <Stack.Screen name="FlightDayWaitForBoarding" component={FlightDayWaitForBoarding} options={{ headerShown: false }} />
        <Stack.Screen name="LandingScreen" component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LandingChooseTransport" component={LandingChooseTransport} options={{ headerShown: false }} />
        <Stack.Screen name="LandingDisembarkPlane" component={LandingDisembarkPlane} options={{ headerShown: false }} />
        <Stack.Screen name="LandingExitAirport" component={LandingExitAirport} options={{ headerShown: false }} />
        <Stack.Screen name="LandingPassportControl" component={LandingPassportControl} options={{ headerShown: false }} />
        <Stack.Screen name="LandingRetrieveLuggage" component={LandingRetrieveLuggage} options={{ headerShown: false }} />
        <Stack.Screen name="ChecklistScreen" component={ChecklistScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Congratulations" component={Congratulations} options={{ headerShown: false }} />
        <Stack.Screen name="IntroScreen" component={IntroScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
