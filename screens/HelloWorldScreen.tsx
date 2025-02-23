import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HelloWorldScreen = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/icon.png')} 
        style={styles.image}
      />
      
      <Text style={styles.title}>Hello World</Text>
      <Text style={styles.subheading}>Taking the stress out of the airport experience</Text>
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
  image: {
    width: 300,  
    height: 300, 
    marginBottom: 40,  
  },
});

export default HelloWorldScreen;
