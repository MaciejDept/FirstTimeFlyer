import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions 
} from 'react-native';

const { height } = Dimensions.get('window'); 

const IntroScreen = ({ navigation }: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.innerContainer}>
          
          <Text style={styles.title}>Welcome!</Text>

          <Image 
            source={require('../assets/welcome_dodo.png')}
            style={styles.image}
          />

          <Text style={styles.introText}>
            Flying for the first time can be a stressful experience ... 
            {"\n\n"}
            No worries, we’re here to help! 
            {"\n\n"}
            From packing your bags to landing at your destination, we’ll guide you through each step of the way. 
            {"\n\n"}
            Every flight journey consists of 3 parts:
          </Text>

          <View style={styles.listContainer}>
            <TouchableOpacity 
              style={styles.bulletContainer} 
              onPress={() => navigation.navigate('PreTripScreen')}
            >
              <View style={styles.bullet} />
              <Text style={styles.bulletText}>Pre-Trip Inspection</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.bulletContainer} 
              onPress={() => navigation.navigate('FlightDayScreen')}
            >
              <View style={styles.bullet} />
              <Text style={styles.bulletText}>Flight Day</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.bulletContainer} 
              onPress={() => navigation.navigate('LandingScreen')}
            >
              <View style={styles.bullet} />
              <Text style={styles.bulletText}>Landing</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.introText}>
            Follow each step of the journey and mark completed items on the Checklist. You’ve got this! Let’s make your first flight fun and stress-free. 
            {"\n\n"}
            Oh, and don’t worry, even the dodo learned to soar… just in its own way!
          </Text>

        </View>
      </ScrollView>

      {/* Gradient Overlay for Scroll Hint */}
      <View style={styles.scrollHint} />

      {/* Back & Next Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.navButton, styles.backButton]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, styles.nextButton]} 
          onPress={() => navigation.navigate('PreTripScreen')}
        >
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 5,
    color: '#333',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 20,
  },
  introText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContainer: {
    marginBottom: 20,
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
    backgroundColor: '#417D7D', // Darker Teal
    marginRight: 10,
  },
  bulletText: {
    fontSize: 18,
    color: '#333',
    textDecorationLine: 'underline',
  },
  /* Gradient Overlay for Scroll Hint */
  scrollHint: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'rgba(232, 232, 232, 0.9)',
  },
  /* Fixed Buttons at the Bottom */
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 5,
  },
  backButton: {
    backgroundColor: '#5DA3A3', // Teal
    borderColor: '#417D7D', // Darker Teal
  },
  nextButton: {
    backgroundColor: '#5DA3A3', // Teal
    borderColor: '#417D7D', // Darker Teal
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default IntroScreen;
