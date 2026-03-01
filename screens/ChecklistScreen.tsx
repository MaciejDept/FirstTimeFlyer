import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { Colors } from '../commonStyles';
import { useLanguage } from '../i18n';

const insetBottom = initialWindowMetrics?.insets.bottom ?? 0;
const TOTAL_ITEMS = 19; // 7 pre-trip + 7 flight day + 5 landing

const ChecklistScreen = ({ navigation }: any) => {
  const { t } = useLanguage();
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(TOTAL_ITEMS).fill(false));

  const checklistItems = [
    {
      title: t('checklist', 'sectionPreTrip'),
      items: [
        t('checklist', 'checkPreTrip1'),
        t('checklist', 'checkPreTrip2'),
        t('checklist', 'checkPreTrip3'),
        t('checklist', 'checkPreTrip4'),
        t('checklist', 'checkPreTrip5'),
        t('checklist', 'checkPreTrip6'),
        t('checklist', 'checkPreTrip7'),
      ],
    },
    {
      title: t('checklist', 'sectionFlightDay'),
      items: [
        t('checklist', 'checkFlightDay1'),
        t('checklist', 'checkFlightDay2'),
        t('checklist', 'checkFlightDay3'),
        t('checklist', 'checkFlightDay4'),
        t('checklist', 'checkFlightDay5'),
        t('checklist', 'checkFlightDay6'),
        t('checklist', 'checkFlightDay7'),
      ],
    },
    {
      title: t('checklist', 'sectionLanding'),
      items: [
        t('checklist', 'checkLanding1'),
        t('checklist', 'checkLanding2'),
        t('checklist', 'checkLanding3'),
        t('checklist', 'checkLanding4'),
        t('checklist', 'checkLanding5'),
      ],
    },
  ];

  useEffect(() => {
    const loadState = async () => {
      try {
        const savedState = await AsyncStorage.getItem('checkedItems');
        if (savedState) setCheckedItems(JSON.parse(savedState));
      } catch (error) {
        console.log('Error loading state:', error);
      }
    };
    loadState();
  }, []);

  useEffect(() => {
    const saveState = async () => {
      try {
        await AsyncStorage.setItem('checkedItems', JSON.stringify(checkedItems));
      } catch (error) {
        console.log('Error saving state:', error);
      }
    };
    saveState();
  }, [checkedItems]);

  const toggleCheckbox = (index: number) => {
    setCheckedItems(prev => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const checkedCount = checkedItems.filter(Boolean).length;
  const isAllChecked = checkedCount === TOTAL_ITEMS;
  const progress = checkedCount / TOTAL_ITEMS;

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{t('checklist', 'title')}</Text>

        <View style={styles.progressRow}>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress * 100}%` as any }]} />
          </View>
          <Text style={styles.progressLabel}>{checkedCount}/{TOTAL_ITEMS}</Text>
        </View>

        {checklistItems.map((section, sectionIndex) => {
          const sectionOffset = checklistItems
            .slice(0, sectionIndex)
            .reduce((acc, s) => acc + s.items.length, 0);

          return (
            <View key={sectionIndex} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <View style={styles.sectionCard}>
                {section.items.map((item, itemIndex) => {
                  const absoluteIndex = sectionOffset + itemIndex;
                  const checked = checkedItems[absoluteIndex];
                  const isLast = itemIndex === section.items.length - 1;
                  return (
                    <TouchableOpacity
                      key={absoluteIndex}
                      style={[styles.checkRow, !isLast && styles.checkRowBorder]}
                      onPress={() => toggleCheckbox(absoluteIndex)}
                      activeOpacity={0.7}
                    >
                      <Checkbox
                        status={checked ? 'checked' : 'unchecked'}
                        onPress={() => toggleCheckbox(absoluteIndex)}
                        color={Colors.primary}
                        uncheckedColor={Colors.textMuted}
                      />
                      <Text style={[styles.checkText, checked && styles.checkTextDone]}>
                        {item}
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.scrollHint} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.navButton, styles.backButton]}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
        >
          <Text style={[styles.navButtonText, styles.navButtonTextDark]}>{t('common', 'back')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, styles.completeButton, !isAllChecked && styles.disabledButton]}
          onPress={() => navigation.navigate('Congratulations')}
          disabled={!isAllChecked}
          activeOpacity={0.85}
        >
          <Text style={[styles.navButtonText, !isAllChecked && styles.disabledText]}>
            {t('common', 'complete')}
          </Text>
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
    paddingTop: 72,
    paddingBottom: 160,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: Colors.textPrimary,
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 0.3,
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    gap: 12,
  },
  progressTrack: {
    flex: 1,
    height: 6,
    backgroundColor: Colors.surface,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: 6,
    backgroundColor: Colors.primary,
    borderRadius: 3,
  },
  progressLabel: {
    fontSize: 13,
    color: Colors.textSecondary,
    fontWeight: '600',
    minWidth: 36,
    textAlign: 'right',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: Colors.primary,
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 10,
    marginLeft: 4,
  },
  sectionCard: {
    backgroundColor: Colors.surface,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.border,
    overflow: 'hidden',
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  checkRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  checkText: {
    fontSize: 15,
    color: Colors.textPrimary,
    flexShrink: 1,
    lineHeight: 22,
    marginLeft: 4,
  },
  checkTextDone: {
    color: Colors.textMuted,
    textDecorationLine: 'line-through',
  },
  scrollHint: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 110,
    backgroundColor: 'rgba(247, 248, 250, 0.92)',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: insetBottom + 14,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(247, 248, 250, 0.88)',
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  navButton: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  backButton: {
    backgroundColor: Colors.surface,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  completeButton: {
    backgroundColor: Colors.primary,
    shadowColor: Colors.primary,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 4,
  },
  disabledButton: {
    backgroundColor: Colors.disabled,
    shadowOpacity: 0,
    elevation: 0,
  },
  navButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.3,
  },
  navButtonTextDark: {
    color: Colors.textPrimary,
  },
  disabledText: {
    color: Colors.disabledText,
  },
});

export default ChecklistScreen;
