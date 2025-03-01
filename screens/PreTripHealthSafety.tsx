import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles';  // Import commonStyles

const PreTripHealthSafety = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/6.png')} // Replace with your actual image
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Health and Safety</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Health requirements:</Text>
          <Text style={commonStyles.paragraphText}>
            Check if there are any special health requirements, like COVID tests or vaccination certificates (depending on your destination). Some countries may have specific entry requirements that can change frequently, so it’s a good idea to stay updated. If you're feeling uncertain about what’s needed, don't hesitate to reach out to your airline or the embassy of your destination for clarification. It’s always better to be over-prepared than under-prepared, and taking care of these details early on can give you peace of mind!
          </Text>

          <Text style={commonStyles.boldText}>Medications:</Text>
          <Text style={commonStyles.paragraphText}>
            Make sure you have any necessary medications in your carry-on bag. It's important to carry enough for the duration of your trip, and if you have any special medical needs, make sure to have them easily accessible. If you’re flying internationally, check the regulations for bringing medications into your destination country—some might require a doctor’s note or prescription. It’s always a good idea to keep your medication in its original packaging as well. Stay healthy and happy during your journey!
          </Text>
        </View>
      </ScrollView>

      <View style={commonStyles.scrollHint} />

      <View style={commonStyles.buttonContainer}>
        <TouchableOpacity 
          style={[commonStyles.navButton, commonStyles.backButton]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={commonStyles.navButtonText}>Back</Text>
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

export default PreTripHealthSafety;
