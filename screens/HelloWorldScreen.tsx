import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const HelloWorldScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Pre Trip Inspection</Text>
      
      <View style={styles.listContainer}>
        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('WelcomeScreen')}>
            Check flight details
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('WelcomeScreen')}>
            Online check-in and print/save boarding pass
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('WelcomeScreen')}>
            Pack bags according to airline rules
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('WelcomeScreen')}>
            Set travel reminders
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('WelcomeScreen')}>
            Confirm airport transport
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText} onPress={() => navigation.navigate('WelcomeScreen')}>
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',  // Center all content vertically
    alignItems: 'center',      // Center all content horizontally
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
    flexDirection: 'row', // Align the bullet and text horizontally
    alignItems: 'center', // Center items vertically within the container
    marginBottom: 15, // Space between bullet points
    justifyContent: 'center',
  },
  bullet: {
    width: 10,  // Size of the bullet
    height: 10, // Size of the bullet
    borderRadius: 5,  // Make the bullet a circle
    backgroundColor: '#A68B6B',  // Brown color for the bullet
    marginRight: 10,  // Space between the bullet and text
  },
  bulletText: {
    fontSize: 18,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',  // Center buttons horizontally
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

export default HelloWorldScreen;
