import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import the commonStyles

const FlightDayWaitForBoarding = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/11.png')} 
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Wait for Boarding</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Check the Flight Information Screens:</Text>
          <Text style={commonStyles.paragraphText}>
            Even though you're at the right gate, it's always a good idea to keep an eye on the flight information displays 
            located around the terminal. Sometimes gates change, or there might be updates about your flight.
          </Text>

          <Text style={commonStyles.boldText}>Listen for Announcements:</Text>
          <Text style={commonStyles.paragraphText}>
            Boarding is done in groups, so not everyone boards at the same time. Listen carefully to the announcements or 
            check with the airline staff at the gate if you're unsure when it's your turn.
          </Text>

          <Text style={commonStyles.boldText}>Get Comfortable While You Wait:</Text>
          <Text style={commonStyles.paragraphText}>
            If you have time before boarding, find a comfortable seat near your gate. You can grab a snack, drink some water, 
            or even take a moment to relax before your flight.
          </Text>

          <Text style={commonStyles.boldText}>Prepare for Boarding:</Text>
          <Text style={commonStyles.paragraphText}>
            Keep your boarding pass and passport (if needed) ready. If you're carrying a bag, make sure the items you'll 
            need on the plane—like headphones or a book—are easily accessible.
          </Text>

          <Text style={commonStyles.boldText}>Stretch Your Legs:</Text>
          <Text style={commonStyles.paragraphText}>
            You'll be sitting for a while on the flight, so if you've been at the gate for a long time, take a short walk 
            around the terminal. Just stay close so you don’t miss the boarding call!
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

export default FlightDayWaitForBoarding;
