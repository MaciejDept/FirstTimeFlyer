import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const Congratulations = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        <Image 
          source={require('../assets/congrats_dodo.png')}
          style={styles.image}
        />

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
      </ScrollView>

      {/* Button Container (Stacked vertically) */}
      <View style={styles.buttonContainer}>
        {/* Home Button */}
        <TouchableOpacity style={[styles.button, { backgroundColor: '#5DA3A3' }]} onPress={() => navigation.navigate('WelcomeScreen')}>
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>

        {/* Back Button */}
        <TouchableOpacity style={[styles.button, { backgroundColor: '#5DA3A3' }]} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 20,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  image: {
    width: 300,  
    height: 300,
    borderRadius: 20,  
    marginBottom: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  messageContainer: {
    marginBottom: 30,
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
    width: '100%',
    alignItems: 'center',
    paddingBottom: 20,
  },
  button: {
    backgroundColor: '#5DA3A3',
    borderColor: '#417D7D',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Congratulations;
