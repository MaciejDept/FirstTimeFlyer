import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; 

const PreTripCheckFlightDetails = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      <Image 
        source={require('../assets/page_logos/1.png')} 
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Check Flight Details</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Flight number:</Text>
          <Text style={commonStyles.paragraphText}>
            Your flight number is a unique code assigned to your flight, found in your booking confirmation email, airline app, or e-ticket. For example, a British Airways flight might be BA567, while a Virgin Atlantic flight could be VS123. This number helps you locate your flight on airport screens and track any updates.
          </Text>

          <Text style={commonStyles.boldText}>Airport and Terminal:</Text>
          <Text style={commonStyles.paragraphText}>
            Some cities, like London, have multiple airports (e.g., Heathrow, Gatwick, and Stansted), so double-check which one you're flying from. If using a taxi or ride service, confirm the correct airport to avoid last-minute stress.
          </Text>
          <Text style={commonStyles.paragraphText}>
            Airports are divided into terminals, with airlines usually operating from specific ones (e.g., Terminal 1, Terminal 2). Your terminal number is listed in your booking confirmation, airline app, or on the airport’s website. If you're unsure, check flight information screens upon arrival or ask airport staff—they’re there to help!
          </Text>
          <Text style={commonStyles.paragraphText}>
            Some terminals require extra time to reach, sometimes involving trains, shuttles, or long walks. Plan for a little extra time so you can navigate stress-free. If you're ever unsure, just follow the signs or ask for assistance.
          </Text>
        </View>
      </ScrollView>

      <View style={commonStyles.scrollHint} />

      <View style={commonStyles.buttonContainer}>
        <TouchableOpacity 
          style={[commonStyles.navButton, commonStyles.backButton]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={commonStyles.navButtonTextDark}>Back</Text>
        </TouchableOpacity>

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

export default PreTripCheckFlightDetails;
