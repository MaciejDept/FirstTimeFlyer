import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Checkbox } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const ChecklistScreen = () => {
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(6).fill(false)); // 6 checkboxes

  // Load saved state from AsyncStorage on mount
  useEffect(() => {
    const loadState = async () => {
      try {
        const savedState = await AsyncStorage.getItem('checkedItems');
        if (savedState) {
          setCheckedItems(JSON.parse(savedState)); // Load the saved state from AsyncStorage
        }
      } catch (error) {
        console.log('Error loading state:', error);
      }
    };

    loadState();
  }, []);

  // Save state to AsyncStorage whenever it changes
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

  // Toggle checkbox state
  const toggleCheckbox = (index: number) => {
    setCheckedItems(prevState => {
      const newState = [...prevState];
      newState[index] = !newState[index]; // Toggle the checkbox at the specified index
      return newState;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel Checklist</Text>

      <View style={styles.listContainer}>
        {/* List of checkboxes */}
        {['Check flight details', 'Online check-in and print/save boarding pass', 'Pack bags according to airline rules', 'Set travel reminders', 'Confirm airport transport', 'Check health/safety requirements'].map((label, index) => (
          <View key={index} style={styles.bulletContainer}>
            <Checkbox
              status={checkedItems[index] ? 'checked' : 'unchecked'}
              onPress={() => toggleCheckbox(index)} // Toggle state based on index
            />
            <Text style={styles.bulletText}>{label}</Text>
          </View>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Next button pressed')}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#E8E8E8',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  listContainer: {
    marginBottom: 30,
    width: '100%',
  },
  bulletContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  bulletText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    backgroundColor: '#A68B6B',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChecklistScreen;
