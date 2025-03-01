import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import common styles

const LandingRetrieveLuggage = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/16.png')} // Use your actual image path
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
            Head to the <Text style={commonStyles.boldText}>Baggage Claim</Text> area and locate the carousel corresponding to your flight.
          </Text>

          <Text style={commonStyles.boldText}>Flight Number:</Text>
          <Text style={commonStyles.paragraphText}>
            Check the <Text style={commonStyles.boldText}>flight number</Text> displayed above the carousel to ensure you’re at the right one.
          </Text>

          <Text style={commonStyles.boldText}>Luggage Check:</Text>
          <Text style={commonStyles.paragraphText}>
            Once your luggage appears, take your bag and check that it matches the <Text style={commonStyles.boldText}>baggage tag</Text>.
          </Text>

          <Text style={commonStyles.boldText}>Damaged or Missing Bags:</Text>
          <Text style={commonStyles.paragraphText}>
            If your bag doesn’t appear or is damaged, report it to the <Text style={commonStyles.boldText}>baggage desk</Text> immediately.
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
