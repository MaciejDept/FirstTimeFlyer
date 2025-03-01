import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const PreTripOnlineCheckIn = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/2.png')} // Replace with your actual image
        style={styles.image}  
      />

      <Text style={styles.title}>Online Check-In</Text>
      
      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={styles.listContainer}>
          <Text style={styles.boldText}>Check-in window:</Text>
          <Text style={styles.paragraphText}>
            Most airlines allow you to check in 24-48 hours before your flight. It’s a good idea to check in online as soon as the window opens to avoid long lines at the airport and ensure your seat preference is secured. Online check-in can be done via the airline’s website or app, and it will save you time and stress on the day of your flight. If you don’t check in online, you’ll need to do so at the airport, which could take longer, especially during busy travel times. If you're unsure about how to check in, the airline's customer service team will be happy to help.
          </Text>

          <Text style={styles.boldText}>Personal details:</Text>
          <Text style={styles.paragraphText}>
            During online check-in, you’ll be asked to provide some personal details, such as your passport number (if traveling internationally), your contact information, and any special requests you might have (like assistance with mobility). This is also the time to confirm your travel details, such as baggage allowance and seat preferences. It’s important to make sure the details are correct, so double-check everything before finalizing your check-in. Don’t worry—it’s a quick process, and once done, you’ll be one step closer to your adventure!
          </Text>

          <Text style={styles.boldText}>Boarding pass:</Text>
          <Text style={styles.paragraphText}>
            Once you’ve completed check-in, you’ll receive your boarding pass. This is your ticket to the plane! You can either print it out or save it on your phone (many airlines have mobile apps that allow you to access it digitally). If you choose to go digital, just make sure your phone is charged and that you can access the boarding pass easily when needed. The boarding pass will include important details like your flight number, departure gate, and boarding time. Make sure to keep it handy when you go through security and at the gate later — it’s your key to getting on board!
          </Text>
        </View>
      </ScrollView>

      {/* Gradient Overlay for Scroll Hint */}
      <View style={styles.scrollHint} />

      {/* Bottom Buttons */}
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
    paddingTop: 40, // Space for title
    paddingHorizontal: 25, // Added horizontal padding for better spacing
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
    marginHorizontal: 20, // Added margin for better spacing
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

export default PreTripOnlineCheckIn;
