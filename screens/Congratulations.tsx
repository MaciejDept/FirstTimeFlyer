import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const Congratulations = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Scrollable Content */}
      <ScrollView 
        contentContainerStyle={styles.scrollContent} 
        showsVerticalScrollIndicator={false}
      >
        <Image 
          source={require('../assets/congrats_dodo.png')}
          style={styles.image}
        />

        <Text style={styles.title}>🎉 Congratulations!</Text>
        
        <View style={styles.messageContainer}>
          <Text style={styles.message}>
            You’ve successfully completed your first flight!
          </Text>
          <Text style={styles.message}>
            Welcome to the world of travel.
          </Text>
          <Text style={styles.message}>
            We can’t wait to see you soar again on your next adventure!
          </Text>
        </View>
      </ScrollView>

      {/* Translucent Overlay Behind Buttons */}
      <View style={styles.scrollHint} />

      {/* Button Container (Stacked vertically) */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#5DA3A3' }]} 
          onPress={() => navigation.navigate('WelcomeScreen')}
        >
          <Text style={styles.buttonText}>🏠 Home</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#417D7D' }]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 160,
  },
  image: {
    width: 280,  
    height: 280,
    marginBottom: 20,
  },
  title: {
    fontSize: 34,
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
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 12,
    maxWidth: '85%',
    lineHeight: 26,
  },
  /* Translucent overlay like other screens */
  scrollHint: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: 'rgba(232, 232, 232, 0.9)',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 80,
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 30,
    marginBottom: 15,
    width: '90%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3, 
  },
  buttonText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Congratulations;
