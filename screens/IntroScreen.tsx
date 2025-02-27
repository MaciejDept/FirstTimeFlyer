import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        
        <Text style={styles.title}>Welcome!</Text>

        <Text style={styles.introText}>
          Flying for the first time can be a stressful experience ... 
          {"\n\n"}
          No worries, we’re here to help! 
          {"\n\n"}
          From packing your bags to landing at your destination, we’ll guide you through each step of the way. 
          {"\n\n"}
          Every flight journey consists of 3 parts
        </Text>

        <View style={styles.listContainer}>
          {/* Bullet points with navigation links */}
          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText} onPress={() => navigation.navigate('PreTripScreen')}>
              Pre-Trip Inspection
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText} onPress={() => navigation.navigate('FlightDayScreen')}>
              Flight Day
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText} onPress={() => navigation.navigate('LandingScreen')}>
              Landing
            </Text>
          </View>
        </View>

        <Text style={styles.introText}>
          Follow each step of the journey and tick-off completed items on the Checklist. You’ve got this! Let’s make your first flight fun and stress-free. 
          {"\n\n"}
          Oh, and don’t worry, even the dodo learned to soar… just in its own way!
        </Text>

        {/* Image before the button */}
        <Image 
          source={require('../assets/welcome_dodo.png')}
          style={styles.image}
        />

        {/* Continue Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('PreTripScreen')}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 90,
    marginBottom: 50,
    color: '#333',
    textAlign: 'center',
  },
  introText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
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
    marginTop: 0,
    marginBottom: 20,
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

export default WelcomeScreen;
