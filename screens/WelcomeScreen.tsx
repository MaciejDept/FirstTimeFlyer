import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, FlatList } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { Colors } from '../commonStyles';
import { useLanguage, LANGUAGES } from '../i18n';

const insetTop = initialWindowMetrics?.insets.top ?? 0;
const insetBottom = initialWindowMetrics?.insets.bottom ?? 0;

const WelcomeScreen = ({ navigation }: any) => {
  const { t, language, setLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectedLang = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  return (
    <View style={styles.container}>

      {/* ── Title & tagline ── */}
      <View style={styles.textSection}>
        <Text style={styles.title}>{t('welcome', 'title')}</Text>
        <Text style={styles.subheading}>{t('welcome', 'subheading')}</Text>
      </View>

      {/* ── Hero image ── */}
      <View style={styles.imageSection}>
        <Image
          source={require('../assets/welcome_home.png')}
          style={styles.image}
        />
      </View>

      {/* ── CTA button ── */}
      <View style={styles.buttonSection}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('IntroScreen')}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>{t('welcome', 'cta')}</Text>
        </TouchableOpacity>
      </View>

      {/* ── Language picker ── */}
      <View style={styles.pickerSection}>
        <TouchableOpacity
          style={styles.dropdownTrigger}
          onPress={() => setDropdownOpen(true)}
          activeOpacity={0.8}
        >
          <Text style={styles.dropdownFlag}>{selectedLang.flag}</Text>
          <Text style={styles.dropdownName}>{selectedLang.nativeName}</Text>
          <Text style={styles.dropdownCaret}>▾</Text>
        </TouchableOpacity>
      </View>

      {/* ── Dropdown modal ── */}
      <Modal
        visible={dropdownOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setDropdownOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalBackdrop}
          activeOpacity={1}
          onPress={() => setDropdownOpen(false)}
        >
          <View style={styles.dropdownList}>
            <FlatList
              data={LANGUAGES}
              keyExtractor={(item) => item.code}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.dropdownItem,
                    item.code === language && styles.dropdownItemActive,
                  ]}
                  onPress={() => {
                    setLanguage(item.code);
                    setDropdownOpen(false);
                  }}
                  activeOpacity={0.75}
                >
                  <Text style={styles.dropdownItemFlag}>{item.flag}</Text>
                  <Text
                    style={[
                      styles.dropdownItemName,
                      item.code === language && styles.dropdownItemNameActive,
                    ]}
                  >
                    {item.nativeName}
                  </Text>
                  {item.code === language && (
                    <Text style={styles.dropdownItemCheck}>✓</Text>
                  )}
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: insetTop + 80,
    paddingBottom: insetBottom + 32,
    paddingHorizontal: 28,
  },

  // Title & tagline
  textSection: {
    alignItems: 'center',
    width: '100%',
    marginBottom: 8,
  },
  title: {
    fontSize: 45,
    fontWeight: '800',
    color: Colors.textPrimary,
    textAlign: 'center',
    letterSpacing: 0.4,
    marginBottom: 10,
  },
  subheading: {
    fontSize: 14,
    color: Colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },

  // Hero image
  imageSection: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginVertical: 32,
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: 'contain',
  },

  // CTA button
  buttonSection: {
    width: '100%',
    marginBottom: 12,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 18,
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

  // Language picker
  pickerSection: {
    width: '100%',
  },
  pickerLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.9,
    marginBottom: 8,
    textAlign: 'center',
  },
  dropdownTrigger: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 10,
  },
  dropdownFlag: {
    fontSize: 22,
  },
  dropdownName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: Colors.textPrimary,
  },
  dropdownCaret: {
    fontSize: 16,
    color: Colors.textSecondary,
  },

  // Modal backdrop
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },

  // Dropdown list
  dropdownList: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 16,
    elevation: 8,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 18,
    gap: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.border,
  },
  dropdownItemActive: {
    backgroundColor: Colors.primary + '18',
  },
  dropdownItemFlag: {
    fontSize: 22,
  },
  dropdownItemName: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: Colors.textPrimary,
  },
  dropdownItemNameActive: {
    fontWeight: '700',
    color: Colors.primary,
  },
  dropdownItemCheck: {
    fontSize: 16,
    fontWeight: '700',
    color: Colors.primary,
  },
});

export default WelcomeScreen;
