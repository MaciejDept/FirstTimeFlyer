import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const PreTripBaggageCheck = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/page_logos/3.png')} 
        style={styles.image}  
      />

      <Text style={styles.title}>Baggage Check</Text>
      
      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.listContainer}>
          <Text style={styles.boldText}>Carry-on bag:</Text>
          <Text style={styles.paragraphText}>
            When packing your carry-on, remember that most airlines allow one small suitcase or bag in the cabin. Typically, the size and weight limit for carry-on luggage is between 7-10 kg. Be sure to check your airline’s guidelines for specific details. You’ll need to store it in the overhead bin or under the seat in front of you. If you’re unsure about the size, it’s always a good idea to check on your airline’s website or ask the airline staff at the check-in counter.
          </Text>
          <Text style={styles.paragraphText}>
            Also, don't forget about liquids! They must be in containers of 100ml or less and placed in a clear, resealable plastic bag. If you bring any liquids over this amount, they might be confiscated at security.
          </Text>

          <Text style={styles.boldText}>Checked luggage:</Text>
          <Text style={styles.paragraphText}>
            Checked luggage refers to large suitcases that are stored in the airplane’s hold. Be sure to check the size and weight limits for checked luggage with your airline, as exceeding these limits could result in extra fees. Most airlines allow one or two checked bags. 
          </Text>
          <Text style={styles.paragraphText}>
            Avoid packing prohibited items such as sharp objects, large liquids, or aerosols. If you’re not sure whether something is allowed, check the airline's website or consult airport staff for clarification.
          </Text>

          <Text style={styles.boldText}>Baggage allowance and fees:</Text>
          <Text style={styles.paragraphText}>
            If you’re unsure about your baggage allowance, check your airline's baggage policy on their website. Some airlines charge for checked luggage or impose extra charges for weight overages. It's always good to know ahead of time to avoid surprise fees at the airport. If you have multiple bags or oversized luggage, confirm the fees and policies beforehand.
          </Text>

        </View>
      </ScrollView>

      <View style={styles.scrollHint} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.navButton, styles.backButton]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navButton, styles.checklistButton]} 
          onPress={() => navigation.navigate('ChecklistScreen')}
        >
          <Text style={styles.navButtonText}>Checklist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    paddingTop: 40,
    paddingHorizontal: 25,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333',
    textAlign: 'center',
    marginHorizontal: 20,
  },
  listContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 30,
    width: '100%',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    color: '#333',
    marginHorizontal: 15,
  },
  paragraphText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    lineHeight: 28,
    textAlign: 'left',
    marginHorizontal: 15,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
    marginBottom: 5,
    alignSelf: 'center',
  },
  scrollHint: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: 'rgba(232, 232, 232, 0.9)',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 5,
  },
  backButton: {
    backgroundColor: '#5DA3A3',
    borderColor: '#417D7D',
  },
  checklistButton: {
    backgroundColor: '#5DA3A3',
    borderColor: '#417D7D',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PreTripBaggageCheck;
