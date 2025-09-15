import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
        if (savedState) {
          setCheckedItems(JSON.parse(savedState));
        }
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

  const isAllChecked = checkedItems.every(item => item); // Check if all items are checked

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Checklist</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
                    color="#417D7D" // Teal checkbox color
                  />
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              );
            })}
          </View>
        ))}
      </ScrollView>

      {/* Transparent Overlay behind Buttons */}
      <View style={styles.scrollHint} />

      {/* Back & Complete Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: '#5DA3A3' }]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: isAllChecked ? '#5DA3A3' : '#B4B4B4' }]}
          onPress={() => navigation.navigate('Congratulations')}
          disabled={!isAllChecked}
        >
          <Text style={styles.buttonText}>Complete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#E8E8E8',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 30,
  },
  scrollContainer: {
    paddingVertical: 10,
    width: '100%',
    paddingBottom: 160, // ensure space for buttons
  },
  section: {
    marginBottom: 20, 
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 30,  
    textAlign: 'center',
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
    paddingVertical: 5, 
    paddingHorizontal: 10, 
  },
  bulletText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
    flexShrink: 1,
    flexWrap: 'wrap',  
    width: '90%',      
  },
  /* Translucent overlay like IntroScreen */
  scrollHint: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
    backgroundColor: 'rgba(232, 232, 232, 0.9)',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChecklistScreen;
