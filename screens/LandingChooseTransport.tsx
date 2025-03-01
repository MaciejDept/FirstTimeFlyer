import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import common styles

const LandingChooseTransport = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image section placed above the title */}
      <Image 
        source={require('../assets/page_logos/18.png')} // Use your actual image path
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Choose Transport</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Taxi:</Text>
          <Text style={commonStyles.paragraphText}>
            Head to the official taxi rank for a licensed ride.
          </Text>

          <Text style={commonStyles.boldText}>Ride-sharing:</Text>
          <Text style={commonStyles.paragraphText}>
            Look for Uber or Lyft pickup zones, usually marked in the airport.
          </Text>

          <Text style={commonStyles.boldText}>Shuttle Service:</Text>
          <Text style={commonStyles.paragraphText}>
            Some hotels provide an airport shuttle; check if your hotel offers this.
          </Text>

          <Text style={commonStyles.boldText}>Public Transport:</Text>
          <Text style={commonStyles.paragraphText}>
            Find train, metro, or bus stations for budget-friendly transport options, depending on the airport’s facilities.
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

export default LandingChooseTransport;
