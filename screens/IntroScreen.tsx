import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import commonStyles, { Colors } from '../commonStyles';
import { useLanguage } from '../i18n';

const insetBottom = initialWindowMetrics?.insets.bottom ?? 0;

const IntroScreen = ({ navigation }: any) => {
  const { t } = useLanguage();

  const sections = [
    { label: t('intro', 'sectionPreTrip'), route: 'PreTripScreen' },
    { label: t('intro', 'sectionFlightDay'), route: 'FlightDayScreen' },
    { label: t('intro', 'sectionLanding'), route: 'LandingScreen' },
  ];

  return (
    <View style={commonStyles.hubContainer}>
      <ScrollView
        style={commonStyles.scrollContainer}
        contentContainerStyle={[styles.scrollContent, { paddingBottom: insetBottom + 140 }]}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.innerContainer}>
          <Text style={commonStyles.hubTitle}>{t('intro', 'title')}</Text>

          <Image
            source={require('../assets/welcome_dodo.png')}
            style={styles.image}
          />

          <Text style={styles.introText}>{t('intro', 'body1')}</Text>

          <View style={styles.sectionList}>
            {sections.map((item, index) => (
              <TouchableOpacity
                key={index}
                style={styles.sectionCard}
                onPress={() => navigation.navigate(item.route)}
                activeOpacity={0.75}
              >
                <View style={styles.cardDot} />
                <Text style={styles.cardText}>{item.label}</Text>
                <Text style={styles.cardChevron}>›</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.introText}>{t('intro', 'body2')}</Text>
        </View>
      </ScrollView>

      <View style={commonStyles.hubScrollHint} />

      <View style={commonStyles.hubButtonContainer}>
        <TouchableOpacity
          style={[commonStyles.hubNavButton, commonStyles.hubBackButton]}
          onPress={() => navigation.navigate('WelcomeScreen')}
          activeOpacity={0.8}
        >
          <Text style={commonStyles.hubNavButtonTextDark}>{t('common', 'back')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[commonStyles.hubNavButton, commonStyles.hubNextButton]}
          onPress={() => navigation.navigate('PreTripScreen')}
          activeOpacity={0.85}
        >
          <Text style={commonStyles.hubNavButtonText}>{t('common', 'getStarted')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },
  innerContainer: {
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 28,
    marginTop: 4,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  introText: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 26,
  },
  sectionList: {
    width: '100%',
    marginBottom: 24,
  },
  sectionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: Colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  cardDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    marginRight: 14,
    flexShrink: 0,
  },
  cardText: {
    fontSize: 16,
    color: Colors.textPrimary,
    fontWeight: '500',
    flex: 1,
  },
  cardChevron: {
    fontSize: 22,
    color: Colors.textMuted,
    fontWeight: '300',
    lineHeight: 26,
  },
});

export default IntroScreen;
