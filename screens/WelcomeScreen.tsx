import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

const WelcomeScreen = () => {
  const navigation = useNavigation(); // Use navigation hook without types

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/welcome_300x300.png')} 
        style={styles.image}
      />
      
      <Text style={styles.title}>First Time Flyer</Text>
      <Text style={styles.subheading}>Taking the stress out of the airport experience</Text>

      {/* Start Button - Navigates to HelloWorldScreen */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('HelloWorldScreen')} // Log for now, add navigation later
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
    backgroundColor: 'white',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  subheading: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
    marginBottom: 50,
  },
  button: {
    backgroundColor: '#81C784',  // Softer green color
    borderWidth: 1,
    borderColor: '#66BB6A',  // Slightly darker green border
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 6,
    marginBottom: 12,
    alignItems: 'center',
    width: '60%',
    shadowColor: '#000', // Adds a shadow effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  image: {
    width: 300,  
    height: 300, 
    marginBottom: 40,  
  },
});

export default WelcomeScreen;
