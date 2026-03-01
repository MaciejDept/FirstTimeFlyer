import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { Colors } from '../commonStyles';
import { useLanguage } from '../i18n';

const insetBottom = initialWindowMetrics?.insets.bottom ?? 0;

const Congratulations = ({ navigation }: any) => {
  const { t } = useLanguage();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require('../assets/congrats_dodo.png')}
          style={styles.image}
        />

        <Text style={styles.emoji}>🎉</Text>
        <Text style={styles.title}>{t('congratulations', 'title')}</Text>

        <View style={styles.messageCard}>
          <Text style={styles.message}>{t('congratulations', 'message1')}</Text>
          <View style={styles.divider} />
          <Text style={styles.message}>{t('congratulations', 'message2')}</Text>
          <View style={styles.divider} />
          <Text style={styles.message}>{t('congratulations', 'message3')}</Text>
        </View>
      </ScrollView>

      <View style={styles.scrollHint} />

      <View style={[styles.buttonContainer, { bottom: insetBottom + 14 }]}>
        <TouchableOpacity
          style={[styles.button, styles.homeButton]}
          onPress={() => navigation.navigate('WelcomeScreen')}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>{t('common', 'home')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 28,
    paddingTop: 60,
    paddingBottom: 220,
  },
  image: {
    width: 260,
    height: 260,
    marginBottom: 12,
    resizeMode: 'contain',
  },
  emoji: {
    fontSize: 48,
    marginBottom: 12,
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: 28,
    letterSpacing: 0.4,
  },
  messageCard: {
    backgroundColor: Colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    paddingVertical: 8,
    paddingHorizontal: 24,
    width: '100%',
  },
  divider: {
    height: 1,
    backgroundColor: Colors.border,
    marginVertical: 4,
  },
  message: {
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 26,
    paddingVertical: 14,
  },
  scrollHint: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: 'rgba(247, 248, 250, 0.92)',
  },
  buttonContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    gap: 10,
  },
  button: {
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
    width: '100%',
  },
  homeButton: {
    backgroundColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 4,
  },
  backButton: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
  buttonTextDark: {
    color: Colors.textPrimary,
  },
});

export default Congratulations;
