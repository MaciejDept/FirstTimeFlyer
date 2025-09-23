import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialWindowMetrics } from 'react-native-safe-area-context';

const insetBottom = initialWindowMetrics?.insets.bottom ?? 0;

const ChecklistScreen = ({ navigation }: any) => {
  const checklistItems = [
    { title: 'Pre-Trip Inspection', items: [
      'Check flight details',
      'Online check-in and print/save boarding pass',
      'Check baggage allowance and policies',
      'Pack your bags',
      'Set travel reminders',
      'Confirm transport to airport',
      'Check health and safety requirements',
    ]},
    { title: 'Flight Day', items: [
      'Arrive at the airport 2-3 hours early',
      'Check in and drop off luggage',
      'Go through security',
      'Find your gate',
      'Wait for boarding',
      'Board the plane',
      'Enjoy the flight!',
    ]},
    { title: 'Landing', items: [
      'Disembark the plane',
      'Proceed to passport control',
      'Retrieve your luggage',
      'Exit the airport',
      'Choose transportation to your destination',
    ]},
  ];

  const totalItems = checklistItems.reduce((acc, section) => acc + section.items.length, 0);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(totalItems).fill(false));

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
    setCheckedItems(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const isAllChecked = checkedItems.every(item => item);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Travel Checklist</Text>

        {checklistItems.map((section, sectionIndex) => (
          <View key={sectionIndex} style={styles.section}>
            <Text style={styles.sectionTitle}>{section.title}</Text>
            {section.items.map((item, itemIndex) => {
              const absoluteIndex = checklistItems
                .slice(0, sectionIndex)
                .reduce((acc, sec) => acc + sec.items.length, 0) + itemIndex;
              return (
                <View key={absoluteIndex} style={styles.bulletContainer}>
                  <Checkbox
                    status={checkedItems[absoluteIndex] ? 'checked' : 'unchecked'}
                    onPress={() => toggleCheckbox(absoluteIndex)}
                    color="#417D7D"
                  />
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              );
            })}
          </View>
        ))}
      </ScrollView>

      {/* Transparent overlay */}
      <View style={styles.scrollHint} />

      {/* Button row */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.navButton, styles.backButton]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navButton, styles.nextButton, !isAllChecked && styles.disabledButton]}
          onPress={() => navigation.navigate('Congratulations')}
          disabled={!isAllChecked}
        >
          <Text style={styles.navButtonText}>Complete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E8E8E8' },
  scrollContainer: { paddingBottom: 160 },
  title: {
    fontSize: 34,
    fontWeight: '700',
    marginTop: 100,
    marginBottom: 30,
    color: '#333',
    textAlign: 'center',
  },
  section: { marginBottom: 30 },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    marginHorizontal: 35,
  },
  bulletText: {
    fontSize: 18,
    color: '#333',
    flexShrink: 1,
  },
  scrollHint: {
    position: 'absolute',
    bottom: 0, left: 0, right: 0,
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
  backButton: { backgroundColor: '#5DA3A3', borderColor: '#417D7D' },
  nextButton: { backgroundColor: '#5DA3A3', borderColor: '#417D7D' },
  disabledButton: { backgroundColor: '#B4B4B4', borderColor: '#999' },
  navButtonText: { fontSize: 16, fontWeight: 'bold', color: '#fff' },
});

export default ChecklistScreen;
