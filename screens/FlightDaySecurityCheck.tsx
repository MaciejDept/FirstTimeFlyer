import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import commonStyles

const FlightDaySecurityCheck = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image section placed above the title */}
      <Image 
        source={require('../assets/page_logos/9.png')} // Use your actual image path
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Security Check</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Go to the security checkpoint:</Text>
          <Text style={commonStyles.paragraphText}>
            You’ll need to remove any liquids, electronics, and possibly your shoes.
          </Text>

          <Text style={commonStyles.boldText}>Have your boarding pass and ID ready:</Text>
          <Text style={commonStyles.paragraphText}>
            These will be required at the security checkpoint to proceed.
          </Text>

          <Text style={commonStyles.boldText}>Liquids:</Text>
          <Text style={commonStyles.paragraphText}>
            Ensure all liquids in your carry-on are under 100 ml and in a clear, resealable plastic bag.
          </Text>

          <Text style={commonStyles.boldText}>Metal detectors:</Text>
          <Text style={commonStyles.paragraphText}>
            Be prepared to go through metal detectors and possibly have your carry-on bag scanned.
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

export default FlightDaySecurityCheck;
