import React, { useState } from 'react';
import { 
  View, Text, StyleSheet, TouchableOpacity, ScrollView, Image 
} from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const insetBottom = initialWindowMetrics?.insets.bottom ?? 0;

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
            {"\n\n"}No worries, we’re here to help! 
            {"\n\n"}From packing your bags to landing at your destination, we’ll guide you through each step of the way. 
            {"\n\n"}Every flight journey consists of 3 parts:
          </Text>

          <View style={styles.listContainer}>
            {[
              { label: 'Pre-Trip Inspection', route: 'PreTripScreen' },
              { label: 'Flight Day', route: 'FlightDayScreen' },
              { label: 'Landing', route: 'LandingScreen' },
            ].map((item, index) => (
              <TouchableOpacity 
                key={index}
                style={styles.bulletContainer} 
                onPress={() => navigation.navigate(item.route)}
              >
                <View style={styles.bullet} />
                <Text style={styles.bulletText}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.introText}>
            Follow each step of the journey and mark completed items on the Checklist. You’ve got this! Let’s make your first flight fun and stress-free. 
            {"\n\n"}Oh, and don’t worry, even the dodo learned to soar… just in its own way!
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
    paddingBottom: insetBottom + 140,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    marginTop: 60,
    marginBottom: 15,
    color: '#333',
    textAlign: 'center',
  },
  image: {
    width: 240,
    height: 240,
    borderRadius: 20,
    marginBottom: 20,
    marginTop: 20,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  introText: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 26,
  },
  listContainer: {
    marginBottom: 25,
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    marginHorizontal: 35,
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
    flexShrink: 1,
  },
  scrollHint: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: 'rgba(232, 232, 232, 0.75)',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: insetBottom + 10,
    left: 25,
    right: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(232, 232, 232, 0.6)',
    borderRadius: 20,
    paddingVertical: 10,
  },
  navButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 8,
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
});

export default IntroScreen;
