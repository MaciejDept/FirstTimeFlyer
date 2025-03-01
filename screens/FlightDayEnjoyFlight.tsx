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
            Enjoy your flight! Follow the crew’s instructions for safety procedures and seatbelt signs.
          </Text>

          <Text style={commonStyles.boldText}>Stay hydrated:</Text>
          <Text style={commonStyles.paragraphText}>
            Drink plenty of water during the flight, and if it’s a long flight, take short walks or stretch to avoid stiffness.
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
