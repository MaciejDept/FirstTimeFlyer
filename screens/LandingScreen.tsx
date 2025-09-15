import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const LandingScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      
      <ScrollView 
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Image */}
        <Image 
          source={require('../assets/dodo_landing.png')} 
          style={styles.image}
        />

        <Text style={styles.title}>Landing</Text>
        
        <View style={styles.listContainer}>
          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText} onPress={() => navigation.navigate('LandingDisembarkPlane')}>
              Disembark the plane and follow signs to airport
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText} onPress={() => navigation.navigate('LandingPassportControl')}>
              Proceed to passport control
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText} onPress={() => navigation.navigate('LandingRetrieveLuggage')}>
              Retrieve your luggage
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText} onPress={() => navigation.navigate('LandingExitAirport')}>
              Exit the airport
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <View style={styles.bullet}></View>
            <Text style={styles.bulletText} onPress={() => navigation.navigate('LandingChooseTransport')}>
              Choose transportation to your destination
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Fixed Buttons at the Bottom */}
      <View style={styles.scrollHint} />

      <View style={styles.buttonContainer}>
        {/* Back Button */}
        <TouchableOpacity 
          style={[styles.navButton, styles.backButton]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>

        {/* Next Button */}
        <TouchableOpacity 
          style={[styles.navButton, styles.nextButton]} 
          onPress={() => navigation.navigate('ChecklistScreen')}
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
    paddingBottom: 120,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 50,
    color: '#333',
    textAlign: 'center',
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
    backgroundColor: '#417D7D',
    marginRight: 10,
  },
  bulletText: {
    fontSize: 18,
    color: '#333',
    textDecorationLine: 'underline',
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 20,
    marginBottom: 5,
    alignSelf: 'center',
    marginTop: 80,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 60,
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
  nextButton: {
    backgroundColor: '#5DA3A3',
    borderColor: '#417D7D',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollHint: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: 'rgba(232, 232, 232, 0.9)',
  },
});

export default LandingScreen;
