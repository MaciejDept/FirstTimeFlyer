import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const { height } = Dimensions.get('window');
const insetBottom = initialWindowMetrics?.insets.bottom ?? 0;

const PreTripScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Image 
          source={require('../assets/dodo_inspect.png')} 
          style={styles.image}  
        />  

        <Text style={styles.title}>Pre-Trip Inspection</Text>
        
        <View style={styles.listContainer}>
          {[
            { label: 'Check flight details', route: 'PreTripCheckFlightDetails' },
            { label: 'Online check-in and print/save boarding pass', route: 'PreTripOnlineCheckIn' },
            { label: 'Check your baggage allowance and airline\'s baggage policies', route: 'PreTripBaggageCheck' },
            { label: 'Pack bags according to airline rules', route: 'PreTripPackYourBags' },
            { label: 'Set travel reminders', route: 'PreTripSetTravelReminders' },
            { label: 'Confirm airport transport', route: 'PreTripAirportTransfer' },
            { label: 'Check health/safety requirements', route: 'PreTripHealthSafety' },
          ].map((item, index) => (
            <View key={index} style={styles.bulletContainer}>
              <View style={styles.bullet}></View>
              <Text 
                style={styles.bulletText} 
                onPress={() => navigation.navigate(item.route)}
              >
                {item.label}
              </Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.scrollHint} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.navButton, styles.backButton]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>

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
    backgroundColor: '#E8E8E8',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 140,
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 40,
    color: '#333',
    textAlign: 'center',
  },
  listContainer: {
    marginBottom: 30,
  },
  bulletContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 18, 
    marginHorizontal: 35,
  },
  bullet: {
    width: 10,  
    height: 10, 
    borderRadius: 5,  
    backgroundColor: '#417D7D',
    marginRight: 10,
  },
  bulletText: {
    fontSize: 18,
    color: '#333',
    textDecorationLine: 'underline',
    flexShrink: 1,
  },
  image: {
    width: 240,  
    height: 240,
    borderRadius: 20,  
    marginBottom: 15,
    alignSelf: 'center',
    marginTop: 70,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: insetBottom + 10,
    left: 25,
    right: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(232, 232, 232, 0.6)',
    borderRadius: 20,
    paddingVertical: 10,
  },
  navButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 8,
  },
  backButton: {
    backgroundColor: '#5DA3A3',
    borderColor: '#417D7D',
  },
  nextButton: {
    backgroundColor: '#5DA3A3',
    borderColor: '#417D7D',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollHint: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: 'rgba(232, 232, 232, 0.75)',
  },
});

export default PreTripScreen;
