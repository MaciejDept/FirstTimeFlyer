import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const FlightDayWaitForBoarding = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      
      {/* Image */}
      <Image 
        source={require('../assets/icon.png')} 
        style={styles.image}  
      />

      <Text style={styles.title}>Wait for Boarding</Text>
      
      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={styles.listContainer}>
          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText}>
              After clearing security, locate your departure gate.
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText}>
              Keep an eye on the flight information displays. Gates can change, so stay updated.
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText}>
              Relax, grab a snack, or charge your devices while waiting.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Gradient Overlay for Scroll Hint */}
      <View style={styles.scrollHint} />

      {/* Bottom Buttons */}
      <View style={styles.buttonContainer}>
        {/* Back Button */}
        <TouchableOpacity 
          style={[styles.navButton, styles.backButton]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>

        {/* Checklist Button */}
        <TouchableOpacity 
          style={[styles.navButton, styles.checklistButton]} 
          onPress={() => navigation.navigate('ChecklistScreen')}  // Navigates to Checklist screen
        >
          <Text style={styles.navButtonText}>Checklist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    paddingTop: 40, // Space for title
    paddingHorizontal: 20, // Add horizontal padding for better spacing
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333',
    textAlign: 'center',
    marginHorizontal: 20, // Added margin for better spacing
  },
  listContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    width: '100%', // Ensure full width
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Increased bottom margin for spacing between points
    justifyContent: 'flex-start',
    width: '90%', // Add some margin to the sides for better alignment
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#5DA3A3', // Teal
    marginRight: 10,
  },
  bulletText: {
    fontSize: 18,
    color: '#333',
    lineHeight: 24, // Added lineHeight for better readability
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
    marginBottom: 40,
    alignSelf: 'center', // Center image horizontally
  },
  scrollHint: {
    position: 'absolute',
    bottom: 80,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'rgba(232, 232, 232, 0.9)',
  },
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
  checklistButton: {
    backgroundColor: '#5DA3A3', // Teal
    borderColor: '#417D7D', // Darker Teal
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default FlightDayWaitForBoarding;
