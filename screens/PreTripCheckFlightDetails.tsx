import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const PreTripCheckFlightDetails = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/page_logos/1.png')} 
        style={styles.image}  
      />

      <Text style={styles.title}>Check Flight Details</Text>
      
      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.listContainer}>
          <Text style={styles.boldText}>Flight number:</Text>
          <Text style={styles.paragraphText}>
            Your flight number is a unique code assigned to your flight, found in your booking confirmation email, airline app, or e-ticket. For example, a British Airways flight might be BA567, while a Virgin Atlantic flight could be VS123. This number helps you locate your flight on airport screens and track any updates.
          </Text>

          <Text style={styles.boldText}>Airport and Terminal:</Text>
          <Text style={styles.paragraphText}>
            Some cities, like London, have multiple airports (e.g., Heathrow, Gatwick, and Stansted), so double-check which one you're flying from. If using a taxi or ride service, confirm the correct airport to avoid last-minute stress.
          </Text>
          <Text style={styles.paragraphText}>
            Airports are divided into terminals, with airlines usually operating from specific ones (e.g., Terminal 1, Terminal 2). Your terminal number is listed in your booking confirmation, airline app, or on the airport’s website. If you're unsure, check flight information screens upon arrival or ask airport staff—they’re there to help!
          </Text>
          <Text style={styles.paragraphText}>
            Some terminals require extra time to reach, sometimes involving trains, shuttles, or long walks. Plan for a little extra time so you can navigate stress-free. If you're ever unsure, just follow the signs or ask for assistance.
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
    paddingTop: 40,
    paddingHorizontal: 25,
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
    marginHorizontal: 20,
  },
  listContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 30,
    width: '100%',
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

export default PreTripCheckFlightDetails;
