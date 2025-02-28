import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PreTripScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      
      {/* Image */}
      <Image 
        source={require('../assets/dodo_inspect.png')} 
        style={styles.image}  
      />  

      <Text style={styles.title}>Pre-Trip Inspection</Text>
      
      <View style={styles.listContainer}>
        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('PreTripCheckFlightDetails')}>
            Check flight details
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('PreTripOnlineCheckIn')}>
            Online check-in and print/save boarding pass
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('PreTripBaggageCheck')}>
            Check your baggage allowance and airline's baggage policies
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('PreTripPackYourBags')}>
            Pack bags according to airline rules
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('PreTripSetTravelReminders')}>
            Set travel reminders
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('PreTripAirportTransfer')}>
            Confirm airport transport
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('PreTripHealthSafety')}>
            Check health/safety requirements
          </Text>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        {/* Back Button */}
        <TouchableOpacity 
          style={[styles.navButton, styles.backButton]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>

        {/* Next Button */}
        <TouchableOpacity 
          style={[styles.navButton, styles.nextButton]} 
          onPress={() => navigation.navigate('FlightDayScreen')}
        >
          <Text style={styles.navButtonText}>Next</Text>
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
    backgroundColor: '#E8E8E8', // Same as IntroScreen
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333', // Same as IntroScreen
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
    backgroundColor: '#417D7D',  // Darker Teal from IntroScreen
    marginRight: 10,
  },
  bulletText: {
    fontSize: 18,
    color: '#333', // Same as IntroScreen
    textDecorationLine: 'underline',
  },
  image: {
    width: 200,  
    height: 200,
    borderRadius: 20,  
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  navButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 5,
  },
  backButton: {
    backgroundColor: '#5DA3A3', // Teal from IntroScreen
    borderColor: '#417D7D', // Darker Teal from IntroScreen
  },
  nextButton: {
    backgroundColor: '#5DA3A3', // Teal from IntroScreen
    borderColor: '#417D7D', // Darker Teal from IntroScreen
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // White text, same as in IntroScreen
  },
});

export default PreTripScreen;
