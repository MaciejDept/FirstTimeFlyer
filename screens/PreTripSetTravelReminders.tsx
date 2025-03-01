import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import commonStyles

const PreTripSetTravelReminders = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/4.png')} // Replace with your actual image
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Set Reminders</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Flight Time Reminder:</Text>
          <Text style={commonStyles.paragraphText}>
            Set an alarm or reminder for your flight’s departure time and any required check-in deadlines. This will help you stay on track and avoid any last-minute stress. If you're a first-time flyer, it might feel a little overwhelming to manage all the timing, but don’t worry—just follow the schedule carefully, and everything will fall into place. It's also a good idea to keep an eye on the flight status on the day of your trip to check if there are any delays. Most airlines offer real-time updates through their mobile apps or websites. So, stay calm and keep an eye on your notifications to make sure everything goes smoothly!
          </Text>

          <Text style={commonStyles.boldText}>Leave for the Airport Reminder:</Text>
          <Text style={commonStyles.paragraphText}>
            Set a reminder to leave for the airport with plenty of time. It's usually a good idea to head out 2-3 hours before your flight to ensure you have enough time to check in, go through security, and find your gate. Airports can be busy, and lines at check-in or security can take longer than expected, so leaving early is always a good idea. If you're traveling during peak hours or have a larger airport to navigate, you might want to leave even earlier to avoid rushing. If you’re feeling unsure, remember that you can always check in online beforehand and save some time. The airport staff will be there to help you if you need any guidance along the way!
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

export default PreTripSetTravelReminders;
