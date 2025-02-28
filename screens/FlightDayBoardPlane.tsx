import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const FlightDayBoardPlane = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/icon.png')} // Use your actual image path
        style={styles.image}  
      />

      <Text style={styles.title}>Board the Plane</Text>
      
      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.listContainer}>
          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText}>
              Boarding process: Airlines typically board by groups or seat rows, so listen for your group/row number.
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText}>
              Boarding pass and ID: Be ready to show your boarding pass and ID to the gate agent.
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText}>
              Once you board, find your seat. Place your carry-on luggage in the overhead compartment or under the seat in front of you.
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
          onPress={() => navigation.navigate('ChecklistScreen')}
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
    backgroundColor: '#E8E8E8', // Same background as previous screens
    paddingTop: 40, // Space for title
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
    color: '#333', // Same text color
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
    backgroundColor: '#5DA3A3', // Teal color for bullets
    marginRight: 10,
  },
  bulletText: {
    fontSize: 18,
    color: '#333', // Same text color
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
    backgroundColor: 'rgba(232, 232, 232, 0.9)', // Same as previous gradient color
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
    backgroundColor: '#5DA3A3', // Teal color for the back button
    borderColor: '#417D7D', // Darker teal color for border
  },
  checklistButton: {
    backgroundColor: '#5DA3A3', // Teal color for checklist button
    borderColor: '#417D7D', // Darker teal color for border
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // White text color
  },
});

export default FlightDayBoardPlane;
