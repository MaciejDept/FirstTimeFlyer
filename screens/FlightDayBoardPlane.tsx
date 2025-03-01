import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import the common styles

const FlightDayBoardPlane = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/12.png')} 
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Board the Plane</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Boarding process:</Text>
          <Text style={commonStyles.paragraphText}>
            Airlines typically board by groups or seat rows, so listen for your group/row number.
          </Text>

          <Text style={commonStyles.boldText}>Boarding pass and ID:</Text>
          <Text style={commonStyles.paragraphText}>
            Be ready to show your boarding pass and ID to the gate agent when you board.
          </Text>

          <Text style={commonStyles.boldText}>Finding your seat:</Text>
          <Text style={commonStyles.paragraphText}>
            Once you board, find your seat and place your carry-on luggage in the overhead compartment or under the seat in front of you.
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

export default FlightDayBoardPlane;
