import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/welcome_300x300.png')} 
        style={styles.image}
      />
      <Text style={styles.title}>First Time Flyer</Text>
      <Text style={styles.subheading}>Taking the stress out of the airport experience</Text>
      
      {/* Start Button - Navigates to HelloWorldScreen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HelloWorldScreen')} 
      >
        <Text style={styles.buttonText}>Let's Fly!</Text>
      </TouchableOpacity>
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
    // Apply a soft linear gradient in React Native using a library like react-native-linear-gradient
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Roboto',  // Optional modern font, make sure it is linked
  },
  subheading: {
    fontSize: 18,
    textAlign: 'center',
    color: '#777',
    marginBottom: 40,
    fontFamily: 'Roboto',  // Optional modern font
  },
  button: {
    backgroundColor: '#A68B6B',
    borderColor: '#8C6B4D',
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,  // Large rounded corners for modern feel
    marginBottom: 15,
    alignItems: 'center',
    width: '70%',  // Slightly wider button
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,  // Android shadow elevation
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',  // White text for contrast
    fontWeight: 'bold',
    fontFamily: 'Roboto', // Optional modern font
  },
  image: {
    width: 280,  // Slightly smaller image for better balance
    height: 280,
    borderRadius: 20,  // Rounded corners for image
    marginBottom: 30,
  },
});

export default WelcomeScreen;
