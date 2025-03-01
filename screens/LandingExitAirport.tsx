import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import common styles

const LandingExitAirport = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/17.png')} // Use your actual image path
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Exit the Airport</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Customs:</Text>
          <Text style={commonStyles.paragraphText}>
            After retrieving your luggage, follow signs to Customs (green or red channel).
          </Text>

          <Text style={commonStyles.boldText}>Arrival Hall:</Text>
          <Text style={commonStyles.paragraphText}>
            Once you’ve cleared customs, you’ll be in the Arrival Hall.
          </Text>

          <Text style={commonStyles.boldText}>Amenities:</Text>
          <Text style={commonStyles.paragraphText}>
            This is where you’ll find services like SIM card kiosks, currency exchange, and other amenities like free Wi-Fi or information desks.
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

export default LandingExitAirport;
