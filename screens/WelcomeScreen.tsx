import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { Colors } from '../commonStyles';

const insetBottom = initialWindowMetrics?.insets.bottom ?? 0;

const WelcomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('../assets/welcome_home.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.textSection}>
        <Text style={styles.title}>First Time Flyer</Text>
        <Text style={styles.subheading}>Taking the stress out of the airport experience</Text>
      </View>

      <View style={[styles.buttonWrapper, { bottom: insetBottom + 120 }]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('IntroScreen')}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Let's Fly! ✈️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
  },
  topSection: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 80,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  textSection: {
    alignItems: 'center',
    paddingHorizontal: 32,
    marginTop: 36,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    color: Colors.textPrimary,
    textAlign: 'center',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  subheading: {
    fontSize: 17,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 26,
  },
  buttonWrapper: {
    position: 'absolute',
    left: 32,
    right: 32,
    alignItems: 'center',
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
    paddingHorizontal: 40,
    borderRadius: 16,
    width: '100%',
    alignItems: 'center',
    shadowColor: Colors.primary,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 4,
  },
  buttonText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: '800',
    letterSpacing: 0.4,
  },
});

export default WelcomeScreen;
