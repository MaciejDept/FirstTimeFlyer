import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const PreTripSetTravelReminders = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/4.png')} // Replace with your actual image
        style={styles.image}  
      />

      <Text style={styles.title}>Set Reminders</Text>
      
      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.listContainer}>
          <Text style={styles.boldText}>Flight Time:</Text>
          <Text style={styles.paragraphText}>
            Set an alarm or reminder for your flight’s departure time and any required check-in deadlines. This will help you stay on track and avoid any last-minute stress. If you're a first-time flyer, it might feel a little overwhelming to manage all the timing, but don’t worry—just follow the schedule carefully, and everything will fall into place. It's also a good idea to keep an eye on the flight status on the day of your trip to check if there are any delays. Most airlines offer real-time updates through their mobile apps or websites. So, stay calm and keep an eye on your notifications to make sure everything goes smoothly!
          </Text>

          <Text style={styles.boldText}>Leave for the Airport:</Text>
          <Text style={styles.paragraphText}>
            Set a reminder to leave for the airport with plenty of time. It's usually a good idea to head out 2-3 hours before your flight to ensure you have enough time to check in, go through security, and find your gate. Airports can be busy, and lines at check-in or security can take longer than expected, so leaving early is always a good idea. If you're traveling during peak hours or have a larger airport to navigate, you might want to leave even earlier to avoid rushing. If you’re feeling unsure, remember that you can always check in online beforehand and save some time. The airport staff will be there to help you if you need any guidance along the way!
          </Text>
        </View>
      </ScrollView>

      <View style={styles.scrollHint} />

      <View style={styles.buttonContainer}>
        {/* Back Button */}
        <TouchableOpacity 
          style={[styles.navButton, styles.backButton]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>

        {/* Checklist Button */}
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

export default PreTripSetTravelReminders;
