import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal, FlatList } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { Colors } from '../commonStyles';
import { useLanguage, LANGUAGES } from '../i18n';

const insetBottom = initialWindowMetrics?.insets.bottom ?? 0;

const WelcomeScreen = ({ navigation }: any) => {
  const { t, language, setLanguage } = useLanguage();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const selectedLang = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require('../assets/welcome_home.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.textSection}>
        <Text style={styles.title}>{t('welcome', 'title')}</Text>
        <Text style={styles.subheading}>{t('welcome', 'subheading')}</Text>
      </View>

      {/* Language dropdown trigger */}
      <View style={styles.pickerSection}>
        <Text style={styles.pickerLabel}>{t('welcome', 'selectLanguage')}</Text>
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

      {/* Dropdown modal */}
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

      <View style={[styles.buttonWrapper, { bottom: insetBottom + 120 }]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('IntroScreen')}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>{t('welcome', 'cta')}</Text>
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
  pickerSection: {
    width: '100%',
    marginTop: 24,
    paddingHorizontal: 32,
  },
  pickerLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    marginBottom: 10,
  },
  // Dropdown trigger button
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
  // CTA button
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
