import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import common styles

const LandingPassportControl = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/15.png')} // Use your actual image path
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Proceed to Passport Control</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Immigration Process:</Text>
          <Text style={commonStyles.paragraphText}>
            If traveling internationally, go to Immigration where you will need to present your passport.
          </Text>

          <Text style={commonStyles.boldText}>Visa Check:</Text>
          <Text style={commonStyles.paragraphText}>
            If required, the officer will check your visa or travel permit.
          </Text>

          <Text style={commonStyles.boldText}>Answer Questions:</Text>
          <Text style={commonStyles.paragraphText}>
            Answer any questions the immigration officer may ask about your stay.
          </Text>

          <Text style={commonStyles.boldText}>Additional Documents:</Text>
          <Text style={commonStyles.paragraphText}>
            Depending on the country, you may be asked to provide additional documents like hotel bookings or return flight details.
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

export default LandingPassportControl;
