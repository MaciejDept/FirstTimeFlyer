import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/welcome_home.png')} 
        style={styles.image}
      />
      <Text style={styles.title}>First Time Flyer</Text>
      <Text style={styles.subheading}>Taking the stress out of the airport experience</Text>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('IntroScreen')} 
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
  },
  title: {
    fontSize: 36,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Roboto', 
  },
  subheading: {
    fontSize: 18,
    textAlign: 'center',
    color: '#777',
    marginBottom: 40,
    fontFamily: 'Roboto', 
  },
  button: {
    backgroundColor: '#2A6478',
    borderColor: '#1F4B5A',
    borderWidth: 2,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginBottom: 15,
    alignItems: 'center',
    width: '70%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 15,
    elevation: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  image: {
    width: 300,  
    height: 300,
    borderRadius: 20,  
    marginBottom: 30,
  },
});

export default WelcomeScreen;
