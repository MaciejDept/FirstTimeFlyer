import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import commonStyles, { Colors } from '../commonStyles';

const items = [
  { label: 'Check flight details', route: 'PreTripCheckFlightDetails' },
  { label: 'Online check-in and print/save boarding pass', route: 'PreTripOnlineCheckIn' },
  { label: "Check your baggage allowance and airline's baggage policies", route: 'PreTripBaggageCheck' },
  { label: 'Pack bags according to airline rules', route: 'PreTripPackYourBags' },
  { label: 'Set travel reminders', route: 'PreTripSetTravelReminders' },
  { label: 'Confirm airport transport', route: 'PreTripAirportTransfer' },
  { label: 'Check health/safety requirements', route: 'PreTripHealthSafety' },
];

const PreTripScreen = ({ navigation }: any) => {
  return (
    <View style={commonStyles.hubContainer}>
      <ScrollView
        style={commonStyles.scrollContainer}
        contentContainerStyle={commonStyles.hubScrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require('../assets/dodo_inspect.png')}
          style={commonStyles.hubImage}
        />

        <Text style={commonStyles.hubTitle}>Pre-Trip Inspection</Text>

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
          onPress={() => navigation.navigate('IntroScreen')}
          activeOpacity={0.85}
        >
          <Text style={commonStyles.hubNavButtonTextDark}>‹</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[commonStyles.hubNavButton, commonStyles.hubNextButton]}
          onPress={() => navigation.navigate('FlightDayScreen')}
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

export default PreTripScreen;
