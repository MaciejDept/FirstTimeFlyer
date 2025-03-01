import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import commonStyles

const FlightDayCheckIn = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/8.png')} // Replace with your actual image
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Check-in & Drop off Luggage</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>If you didn’t check in online:</Text>
          <Text style={commonStyles.paragraphText}>
            Head to the check-in counters at the airport. The airline staff will verify your identity and give you your boarding pass.
          </Text>

          <Text style={commonStyles.boldText}>Drop off your checked luggage:</Text>
          <Text style={commonStyles.paragraphText}>
            Make sure it’s labeled properly with your contact info. Once checked in, you can proceed to the next steps of your journey.
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
