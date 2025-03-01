import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import the common styles

const FlightDayEnjoyFlight = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/13.png')} 
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Enjoy the Flight</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Once you’re settled:</Text>
          <Text style={commonStyles.paragraphText}>
            Well done! You’ve made it through the tough part, and now it’s time to relax and enjoy your flight. Listen carefully to the safety demonstration from the flight attendants—they’re there to ensure you have a safe and comfortable journey. Keep your seatbelt fastened when seated, and don’t hesitate to ask the crew if you need anything.
          </Text>

          <Text style={commonStyles.boldText}>Stay hydrated:</Text>
          <Text style={commonStyles.paragraphText}>
            Airplane cabins can be quite dry, so drinking water throughout your flight will help you feel refreshed. If it’s a long flight, try to stretch your legs occasionally or take a short walk up and down the aisle when it’s safe to do so. This helps prevent stiffness and keeps you comfortable.
          </Text>

          <Text style={commonStyles.boldText}>In-Flight Comfort:</Text>
          <Text style={commonStyles.paragraphText}>
            Feel free to adjust your seat for comfort, but be mindful of the person behind you. If you brought entertainment—like a book, music, or a movie—now is a great time to enjoy it. Some flights also offer onboard entertainment, so check your seat screen if available.
          </Text>

          <Text style={commonStyles.boldText}>Almost There!</Text>
          <Text style={commonStyles.paragraphText}>
            You’re doing amazingly! Take a deep breath, relax, and before you know it, you’ll be landing at your destination. Safe travels! 😊✈️
          </Text>
        </View>
      </ScrollView>

      <View style={commonStyles.scrollHint} />

      <View style={commonStyles.buttonContainer}>
        {/* Back Button */}
        <TouchableOpacity 
          style={[commonStyles.navButton, commonStyles.backButton]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={commonStyles.navButtonText}>Back</Text>
        </TouchableOpacity>

        {/* Checklist Button */}
        <TouchableOpacity 
          style={[commonStyles.navButton, commonStyles.checklistButton]} 
          onPress={() => navigation.navigate('ChecklistScreen')}
        >
          <Text style={commonStyles.navButtonText}>Checklist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlightDayEnjoyFlight;
