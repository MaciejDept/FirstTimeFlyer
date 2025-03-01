import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const PreTripHealthSafety = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/6.png')} // Replace with your actual image
        style={styles.image}  
      />

      <Text style={styles.title}>Health and Safety</Text>
      
      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.listContainer}>
          <Text style={styles.boldText}>Health requirements:</Text>
          <Text style={styles.paragraphText}>
            Check if there are any special health requirements, like COVID tests or vaccination certificates (depending on your destination). Some countries may have specific entry requirements that can change frequently, so it’s a good idea to stay updated. If you're feeling uncertain about what’s needed, don't hesitate to reach out to your airline or the embassy of your destination for clarification. It’s always better to be over-prepared than under-prepared, and taking care of these details early on can give you peace of mind!
          </Text>

          <Text style={styles.boldText}>Medications:</Text>
          <Text style={styles.paragraphText}>
            Make sure you have any necessary medications in your carry-on bag. It's important to carry enough for the duration of your trip, and if you have any special medical needs, make sure to have them easily accessible. If you’re flying internationally, check the regulations for bringing medications into your destination country—some might require a doctor’s note or prescription. It’s always a good idea to keep your medication in its original packaging as well. Stay healthy and happy during your journey!
          </Text>
        </View>
      </ScrollView>

      <View style={styles.scrollHint} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.navButton, styles.backButton]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>

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
    backgroundColor: '#E8E8E8',
    paddingTop: 40, // Space for title
    paddingHorizontal: 25, // Added horizontal padding for better spacing
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
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 30,
    width: '100%', // Ensure full width
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    color: '#333',
    marginHorizontal: 15,
  },
  paragraphText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    lineHeight: 28,
    textAlign: 'left',
    marginHorizontal: 15,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
    marginBottom: 5,
    alignSelf: 'center',
  },
  scrollHint: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
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
    backgroundColor: '#5DA3A3',
    borderColor: '#417D7D',
  },
  checklistButton: {
    backgroundColor: '#5DA3A3',
    borderColor: '#417D7D',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PreTripHealthSafety;
