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
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        {/* Next Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('FlightDayScreen')}>
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
    backgroundColor: '#E8E8E8',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333',
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
    backgroundColor: '#A68B6B',  
    marginRight: 10,
  },
  bulletText: {
    fontSize: 18,
    color: '#333',
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
  button: {
    backgroundColor: '#A68B6B',
    borderColor: '#8C6B4D',
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
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PreTripScreen;
