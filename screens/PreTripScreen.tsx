import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import commonStyles, { Colors } from '../commonStyles';
import { useLanguage } from '../i18n';

const PreTripScreen = ({ navigation }: any) => {
  const { t } = useLanguage();

  const items = [
    { label: t('preTrip', 'item1'), route: 'PreTripCheckFlightDetails' },
    { label: t('preTrip', 'item2'), route: 'PreTripOnlineCheckIn' },
    { label: t('preTrip', 'item3'), route: 'PreTripBaggageCheck' },
    { label: t('preTrip', 'item4'), route: 'PreTripPackYourBags' },
    { label: t('preTrip', 'item5'), route: 'PreTripSetTravelReminders' },
    { label: t('preTrip', 'item6'), route: 'PreTripAirportTransfer' },
    { label: t('preTrip', 'item7'), route: 'PreTripHealthSafety' },
  ];

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

        <Text style={commonStyles.hubTitle}>{t('preTrip', 'title')}</Text>

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
          <Text style={[commonStyles.hubNavButtonTextDark, { color: Colors.primary }]}>{t('common', 'checklist')}</Text>
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
