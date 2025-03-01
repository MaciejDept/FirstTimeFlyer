import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import commonStyles

const FlightDayArriveAtAirport = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/7.png')} // Replace with your actual image
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Arrive at the Airport</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Arrive 2-3 hours before departure:</Text>
          <Text style={commonStyles.paragraphText}>
            Arriving early gives you plenty of time to check in, go through security, and handle any unexpected delays.
          </Text>

          <Text style={commonStyles.boldText}>If you’re flying internationally, give yourself the full 3 hours:</Text>
          <Text style={commonStyles.paragraphText}>
            International flights often require more time for check-in, security, and customs, so it’s important to plan ahead.
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

export default FlightDayArriveAtAirport;
