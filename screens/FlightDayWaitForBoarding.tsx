import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import the commonStyles

const FlightDayWaitForBoarding = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/11.png')} 
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Wait for Boarding</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>After clearing security:</Text>
          <Text style={commonStyles.paragraphText}>
            Locate your departure gate.
          </Text>

          <Text style={commonStyles.boldText}>Flight Information Displays:</Text>
          <Text style={commonStyles.paragraphText}>
            Keep an eye on the flight information displays. Gates can change, so stay updated.
          </Text>

          <Text style={commonStyles.boldText}>While waiting:</Text>
          <Text style={commonStyles.paragraphText}>
            Relax, grab a snack, or charge your devices while waiting for the boarding announcement.
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
          onPress={() => navigation.navigate('ChecklistScreen')}  // Navigates to Checklist screen
        >
          <Text style={commonStyles.navButtonText}>Checklist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlightDayWaitForBoarding;
