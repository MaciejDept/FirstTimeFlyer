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
            Airlines typically board passengers in groups or by seat rows. Listen carefully for announcements calling your group or row number before proceeding to the boarding line. 
            If you're unsure when to board, don’t worry—there will be clear announcements, and you can always ask a gate agent for guidance.
          </Text>

          <Text style={commonStyles.boldText}>Boarding pass and ID:</Text>
          <Text style={commonStyles.paragraphText}>
            Have your boarding pass and identification ready. The gate agent will check these before allowing you to proceed onto the plane.
            If you're using a mobile boarding pass, make sure your phone screen is bright so the scanner can read it easily.
            If you have a paper boarding pass, keep it handy so you're not searching for it when it's time to board.
          </Text>

          <Text style={commonStyles.boldText}>Walking through the jet bridge:</Text>
          <Text style={commonStyles.paragraphText}>
            Once your boarding pass is scanned, you'll walk down a covered hallway called a jet bridge that leads directly to the plane.
            It may feel a little narrow, but just follow the path toward the aircraft door. Flight attendants will be there to greet you as you step on board.
          </Text>

          <Text style={commonStyles.boldText}>Finding your seat:</Text>
          <Text style={commonStyles.paragraphText}>
            Once inside the plane, locate your assigned seat number, which is printed on your boarding pass.
            If you’re unsure where to go, flight attendants are happy to help.
          </Text>

          <Text style={commonStyles.boldText}>Storing your carry-on bag:</Text>
          <Text style={commonStyles.paragraphText}>
            Place your carry-on bag either in the overhead compartment or under the seat in front of you.
            If you're storing it overhead, try to put it in a space near your seat. Larger items go in first, and smaller personal items can fit underneath your seat.
          </Text>

          <Text style={commonStyles.boldText}>Getting settled:</Text>
          <Text style={commonStyles.paragraphText}>
            After finding your seat, fasten your seatbelt and take a deep breath—you’re almost ready for takeoff!
            If you need anything, don’t hesitate to ask a flight attendant. The most important thing is to stay calm and enjoy the journey ahead.
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

export default FlightDayBoardPlane;
