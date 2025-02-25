import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Congratulations = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Congratulations!</Text>
      
      <View style={styles.messageContainer}>
        <Text style={styles.message}>
          Congrats on completing your first flight!
        </Text>
        <Text style={styles.message}>
          Welcome to the world of travel.
        </Text>
        <Text style={styles.message}>
          We can’t wait to see you soar again on your next adventure!
        </Text>
      </View>
      
      <View style={styles.buttonContainer}>
        {/* Back to Home Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('WelcomeScreen')}>
          <Text style={styles.buttonText}>Back to Home</Text>
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
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  messageContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  message: {
    fontSize: 20,
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
    maxWidth: '80%',
  },
  buttonContainer: {
    width: '80%',
    alignItems: 'center',
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
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Congratulations;
