import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import commonStyles

const FlightDayFindGate = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/10.png')}
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Find Your Gate</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>After passing security:</Text>
          <Text style={commonStyles.paragraphText}>
            Once you’ve made it through security, take a deep breath—you’re on the right path! Now, follow the signs to your departure gate. There will be clear signage all around the airport to guide you, and airport staff are always available if you need any help.
          </Text>

          <Text style={commonStyles.boldText}>Departure board:</Text>
          <Text style={commonStyles.paragraphText}>
            The departure board is usually easy to spot and is typically located in the main terminal area, near the gates or in a central place. It will display flight numbers, gate information, and boarding times. Keep an eye on it to make sure your gate hasn’t changed (sometimes it does!). If you’re unsure or if you can’t find the board, feel free to ask an airport staff member—they’ll be happy to help. Once you’ve located your flight, head to your gate with plenty of time to relax and feel ready for boarding.
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

export default FlightDayFindGate;
