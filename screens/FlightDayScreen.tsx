import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const FlightDayScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      
      {/* Image above the title */}
      <Image 
        source={require('../assets/dodo_flightday.png')} 
        style={styles.image}
      />
      
      <Text style={styles.title}>Flight Day</Text>
      
      <View style={styles.listContainer}>
        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('FlightDayArriveAtAirport')}>
            Arrive at the airport 2 to 3 hours early
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('FlightDayCheckIn')}>
            Check in and drop off luggage
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('FlightDaySecurityCheck')}>
            Go through security
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('FlightDayFindGate')}>
            Find your gate
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('FlightDayWaitForBoarding')}>
            Wait for boarding
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('FlightDayBoardPlane')}>
            Board the plane
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('FlightDayEnjoyFlight')}>
            Enjoy the flight!
          </Text>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        {/* Back Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        {/* Next Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LandingScreen')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',  
    padding: 20,
    backgroundColor: '#E8E8E8', // Same as IntroScreen and PreTripScreen
  },
  image: {
    width: 200,
    height: 200,  
    marginBottom: 20,  
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333', // Same as in the other screens
    textAlign: 'center',
  },
  listContainer: {
    marginBottom: 30,
  },
  bulletContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 15, 
    marginLeft: 40,
    marginRight: 40,
    justifyContent: 'flex-start',
  },
  bullet: {
    width: 10,  
    height: 10, 
    borderRadius: 5,  
    backgroundColor: '#417D7D',  // Darker Teal from IntroScreen and PreTripScreen
    marginRight: 10,
  },
  bulletText: {
    fontSize: 18,
    color: '#333', // Consistent text color across all screens
    textDecorationLine: 'underline',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    backgroundColor: '#5DA3A3', // Teal from IntroScreen and PreTripScreen
    borderColor: '#417D7D', // Darker Teal from IntroScreen and PreTripScreen
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff', // White text color from IntroScreen and PreTripScreen
    fontWeight: 'bold',
  },
});

export default FlightDayScreen;
