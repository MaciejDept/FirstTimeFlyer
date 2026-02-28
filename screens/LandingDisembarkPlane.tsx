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
          <Text style={commonStyles.boldText}>Congratulations on landing!</Text>
          <Text style={commonStyles.paragraphText}>
            Well done—you’ve made it to your destination! The flight might have seemed long, but now you can breathe easy knowing you’re almost there. Just a few more small steps, and you’ll be all set to start your journey.
          </Text>

          <Text style={commonStyles.boldText}>Wait for the seatbelt sign:</Text>
          <Text style={commonStyles.paragraphText}>
            Wait for the seatbelt sign to turn off and remain seated until it's safe to leave the plane. It's okay to feel a little excited or nervous—everyone has been there! The crew will make sure everything is safe before you get up.
          </Text>

          <Text style={commonStyles.boldText}>Exit the plane:</Text>
          <Text style={commonStyles.paragraphText}>
            Once the plane has come to a complete stop, exit the aircraft and follow the signs to either Immigration or Baggage Claim. You might notice people rushing to get off, but take your time and move at your own pace.
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
          <Text style={commonStyles.navButtonTextDark}>Back</Text>
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
