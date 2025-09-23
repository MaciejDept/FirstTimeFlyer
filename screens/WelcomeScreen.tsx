import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const insetBottom = initialWindowMetrics?.insets.bottom ?? 0;

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/welcome_home.png')} 
        style={styles.image}
      />
      <Text style={styles.title}>First Time Flyer</Text>
      <Text style={styles.subheading}>Taking the stress out of the airport experience</Text>
      
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('IntroScreen')} 
        >
          <Text style={styles.buttonText}>Let's Fly!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 38,
    fontWeight: '700',
    marginTop: 15,
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Roboto',
  },
  subheading: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 60,
    paddingHorizontal: 25,
    lineHeight: 26,
    fontFamily: 'Roboto',
  },
  buttonWrapper: {
    position: 'absolute',
    bottom: insetBottom + 140,
    left: 25,
    right: 25,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#2A6478',
    borderColor: '#1F4B5A',
    borderWidth: 2,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 30,
    width: '85%',
    alignItems: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 17,
    color: '#FFFFFF',
    fontWeight: '700',
    fontFamily: 'Roboto',
  },
  image: {
    width: 320,
    height: 320,
    borderRadius: 25,
    marginBottom: 35,
    marginTop: 20,
    resizeMode: 'contain',
  },
});

export default WelcomeScreen;
