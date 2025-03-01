import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import common styles

const LandingRetrieveLuggage = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/16.png')}
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Retrieve Your Luggage</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Baggage Claim:</Text>
          <Text style={commonStyles.paragraphText}>
            Head to the Baggage Claim area and locate the carousel corresponding to your flight. It’s easy to feel a little unsure of where to go, but don’t worry—there will be plenty of signs to guide you.
          </Text>

          <Text style={commonStyles.boldText}>Flight Number:</Text>
          <Text style={commonStyles.paragraphText}>
            Check the flight number displayed above the carousel to ensure you’re at the right one. The flight number should match the one on your boarding pass, so you’re on the right track!
          </Text>

          <Text style={commonStyles.boldText}>Luggage Check:</Text>
          <Text style={commonStyles.paragraphText}>
            Once your luggage appears, take your bag and check that it matches the baggage tag. If your bag looks different from the tag or is damaged, it’s okay! You’re not alone—just stay calm, and the staff will help you sort things out.
          </Text>

          <Text style={commonStyles.boldText}>Damaged or Missing Bags:</Text>
          <Text style={commonStyles.paragraphText}>
            If your bag doesn’t appear or is damaged, report it to the baggage desk immediately. They’re experienced and will take care of you. Just let them know your flight details, and they’ll guide you through the next steps. It’s a common part of travel, and it will be handled quickly.
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

export default LandingRetrieveLuggage;
