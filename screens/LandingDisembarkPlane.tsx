import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import the common styles

const LandingDisembarkPlane = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/14.png')} 
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Disembark the Plane</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Wait for the seatbelt sign:</Text>
          <Text style={commonStyles.paragraphText}>
            Wait for the seatbelt sign to turn off and remain seated until it's safe to leave the plane.
          </Text>

          <Text style={commonStyles.boldText}>Exit the plane:</Text>
          <Text style={commonStyles.paragraphText}>
            Once the plane has come to a complete stop, exit the aircraft and follow the signs to either Immigration or Baggage Claim.
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

export default LandingDisembarkPlane;
