import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import commonStyles, { Colors } from '../commonStyles';

const items = [
  { label: 'Arrive at the airport 2 to 3 hours early', route: 'FlightDayArriveAtAirport' },
  { label: 'Check in and drop off luggage', route: 'FlightDayCheckIn' },
  { label: 'Go through security', route: 'FlightDaySecurityCheck' },
  { label: 'Find your gate', route: 'FlightDayFindGate' },
  { label: 'Wait for boarding', route: 'FlightDayWaitForBoarding' },
  { label: 'Board the plane', route: 'FlightDayBoardPlane' },
  { label: 'Enjoy the flight!', route: 'FlightDayEnjoyFlight' },
];

const FlightDayScreen = ({ navigation }: any) => {
  return (
    <View style={commonStyles.hubContainer}>
      <ScrollView
        style={commonStyles.scrollContainer}
        contentContainerStyle={commonStyles.hubScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require('../assets/dodo_flightday.png')}
          style={commonStyles.hubImage}
        />

        <Text style={commonStyles.hubTitle}>Flight Day</Text>

        <View style={commonStyles.hubListContainer}>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={commonStyles.hubBulletContainer}
              onPress={() => navigation.navigate(item.route)}
              activeOpacity={0.75}
            >
              <View style={commonStyles.hubBullet} />
              <Text style={commonStyles.hubBulletText}>{item.label}</Text>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={commonStyles.hubScrollHint} />

      <View style={commonStyles.hubButtonContainer}>
        <TouchableOpacity
          style={[commonStyles.hubNavButton, commonStyles.hubChecklistButton]}
          onPress={() => navigation.navigate('ChecklistScreen')}
          activeOpacity={0.85}
        >
          <Text style={[commonStyles.hubNavButtonTextDark, { color: Colors.primary }]}>Checklist</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[commonStyles.hubNavButton, commonStyles.hubBackButton]}
          onPress={() => navigation.goBack()}
          activeOpacity={0.85}
        >
          <Text style={commonStyles.hubNavButtonTextDark}>‹</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[commonStyles.hubNavButton, commonStyles.hubNextButton]}
          onPress={() => navigation.navigate('LandingScreen')}
          activeOpacity={0.85}
        >
          <Text style={commonStyles.hubNavButtonText}>›</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chevron: {
    fontSize: 22,
    color: Colors.textMuted,
    fontWeight: '300',
    lineHeight: 26,
    marginLeft: 8,
  },
});

export default FlightDayScreen;
