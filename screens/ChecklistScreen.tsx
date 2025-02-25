import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChecklistScreen = ({ navigation }: any) => {
  const checklistItems = [
    { title: 'Pre-Trip Inspection', items: [
      'Check flight details',
      'Online check-in and print/save boarding pass',
      'Pack bags according to airline rules',
      'Set travel reminders',
      'Confirm airport transport',
      'Check health/safety requirements',
    ]},
    { title: 'Flight Day', items: [
      'Arrive at the airport 2–3 hours early',
      'Check in (if not done online) and drop off luggage',
      'Go through security',
      'Find your gate and wait for boarding',
      'Board the plane and enjoy the flight!',
    ]},
    { title: 'Landing', items: [
      'Disembark the plane and follow signs to immigration or baggage claim',
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
                  />
                  <Text style={styles.bulletText}>{item}</Text>
                </View>
              );
            })}
          </View>
        ))}
      </ScrollView>

      {/* Back & Next Buttons at the Bottom */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Congratulations')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E8E8E8',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  scrollContainer: {
    paddingVertical: 10,
    width: '100%',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  bulletText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 10,
    flexShrink: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#A68B6B',
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
