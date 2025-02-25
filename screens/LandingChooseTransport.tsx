import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LandingChooseTransport = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Choose Transport</Text>
      
      <View style={styles.listContainer}>
        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText}>
            <Text style={styles.boldText}>Taxi:</Text> Head to the official taxi rank for a licensed ride.
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText}>
            <Text style={styles.boldText}>Ride-sharing:</Text> Look for Uber or Lyft pickup zones, usually marked in the airport.
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText}>
            <Text style={styles.boldText}>Shuttle Service:</Text> Some hotels provide an airport shuttle; check if your hotel offers this.
          </Text>
        </View>

        <View style={styles.bulletContainer}>
          <View style={styles.bullet}></View>
          <Text style={styles.bulletText}>
            <Text style={styles.boldText}>Public Transport:</Text> Find train, metro, or bus stations for budget-friendly transport options, depending on the airport’s facilities.
          </Text>
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        {/* Back Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back</Text>
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
    marginBottom: 50,
    color: '#333',
    textAlign: 'center',
  },
  listContainer: {
    marginBottom: 30,
  },
  bulletContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 15, 
    justifyContent: 'center',
    maxWidth: '90%',
  },
  bullet: {
    width: 10,  
    height: 10, 
    borderRadius: 5,  
    backgroundColor: '#A68B6B',  
    marginRight: 10,
  },
  bulletText: {
    fontSize: 18,
    color: '#333',
    flexShrink: 1,
  },
  boldText: {
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '80%',
  },
  button: {
    backgroundColor: '#A68B6B',
    borderColor: '#8C6B4D',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginBottom: 10,
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

export default LandingChooseTransport;
