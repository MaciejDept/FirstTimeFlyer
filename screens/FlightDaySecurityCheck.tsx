import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const FlightDaySecurityCheck = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      
      {/* Image section placed above the title */}
      <Image 
        source={require('../assets/icon.png')} // Use your actual image path
        style={styles.image}  
      />

      <Text style={styles.title}>Security Check</Text>
      
      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.listContainer}>
          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText}>
              Go to the security checkpoint. You’ll need to remove any liquids, electronics, and possibly your shoes.
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText}>
              Have your boarding pass and ID ready.
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText}>
              Liquids: Ensure all liquids in your carry-on are under 100 ml and in a clear, resealable plastic bag.
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText}>
              Metal detectors: Be prepared to go through metal detectors and possibly have your carry-on bag scanned.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        {/* Back Button */}
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        {/* Checklist Button */}
        <TouchableOpacity 
          style={[styles.button, styles.checklistButton]} 
          onPress={() => navigation.navigate('ChecklistScreen')}
        >
          <Text style={styles.buttonText}>Checklist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8', // Same background color
    paddingTop: 40,
    paddingHorizontal: 20, // Added horizontal padding for better spacing
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
    color: '#333', // Same text color as previous screens
    textAlign: 'center',
  },
  image: {
    width: 200,  // Adjusted to match the FlightDayCheckIn image size
    height: 200, // Adjusted to match the FlightDayCheckIn image size
    borderRadius: 20, // Added rounded corners
    marginBottom: 40, // Space below the image
    alignSelf: 'center', // Centers the image horizontally
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
    marginBottom: 20, // Increased margin for spacing between points
    justifyContent: 'flex-start',
    width: '90%', // Add some margin to the sides for better alignment
  },
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#5DA3A3', // Teal color for bullets
    marginRight: 10,
  },
  bulletText: {
    fontSize: 18,
    color: '#333', // Same text color
    lineHeight: 24, // Added lineHeight for better readability
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#5DA3A3', // Teal color for the button
    borderColor: '#417D7D', // Darker teal color for border
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  checklistButton: {
    backgroundColor: '#5DA3A3', // Same teal color for checklist button
    borderColor: '#417D7D', // Darker teal color for border
  },
  buttonText: {
    fontSize: 16,
    color: '#fff', // White text color
    fontWeight: 'bold',
  },
});

export default FlightDaySecurityCheck;
