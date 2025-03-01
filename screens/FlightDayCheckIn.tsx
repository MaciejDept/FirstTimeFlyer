import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import commonStyles

const FlightDayCheckIn = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/8.png')}
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Check-in and Drop off Luggage</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>If you didn’t check in online:</Text>
          <Text style={commonStyles.paragraphText}>
            If you weren’t able to check in online ahead of time, don’t worry – it’s very simple! Just head to the airline's check-in counters at the airport. The airline staff will be there to assist you, verify your identity, and print your boarding pass for you. They will guide you through the process step-by-step, so feel free to ask any questions if you’re unsure. You're in good hands!
          </Text>

          <Text style={commonStyles.boldText}>Drop off your checked luggage:</Text>
          <Text style={commonStyles.paragraphText}>
            Once you're at the check-in counter, it’s time to drop off your checked luggage (if you have any). Be sure to have your luggage properly labeled with your name, phone number, and your flight details. This helps the airline staff ensure it reaches the correct destination. If you're unsure about any of the rules for checked luggage (like size or weight limits), the staff will be happy to help clarify things for you. Once your luggage is checked in, you’ll be free to move on to the next part of your journey – heading to security!
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

export default FlightDayCheckIn;
