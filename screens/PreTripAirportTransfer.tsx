import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles';  // Import commonStyles

const PreTripAirportTransfer = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>

      {/* Image */}
      <Image 
        source={require('../assets/page_logos/5.png')}  // Replace with the correct image path
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Airport Transport</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Parking Tips:</Text>
          <Text style={commonStyles.paragraphText}>
            If you’re planning to drive, it’s always a good idea to check the parking options at the airport before you go. Many airports offer both short-term and long-term parking, but availability can sometimes be limited, especially during busy travel periods. If possible, try to reserve your parking spot ahead of time, so you don’t have to worry about finding a space when you arrive. Also, compare parking rates across different lots or garages to find the most affordable one. Arriving early to park can save you from the stress of rushing through traffic and help you get a good spot closer to the terminal.
          </Text>

          <Text style={commonStyles.boldText}>Confirm Your Route:</Text>
          <Text style={commonStyles.paragraphText}>
            Whether you’re taking public transportation or a taxi, make sure to double-check your travel plans in advance. Public transport like buses and trains may have limited schedules, especially early in the morning or late at night, so plan accordingly. Look up the best routes and be aware of any possible delays or changes to the schedule. If you’re using a taxi, confirm your pickup location, and check the estimated travel time to avoid last-minute confusion. If you’re worried about finding the right pickup spot, many airports have designated taxi areas. Don’t be afraid to ask for help if you’re unsure!
          </Text>

          <Text style={commonStyles.boldText}>Plan Extra Time:</Text>
          <Text style={commonStyles.paragraphText}>
            One of the most important things to remember when flying for the first time is that it’s always better to arrive early than to risk running late. Airports can be overwhelming, and you may need extra time to go through check-in, security, and other procedures. Take into account the time it takes to get to the airport, but also factor in potential delays like heavy traffic, construction, or road closures. If you’re traveling during peak times, such as holidays or rush hour, expect delays and give yourself a little extra time. It’s much more relaxing to arrive with plenty of time to spare than to rush and feel stressed. Once you’re there, you can relax knowing that everything is in order.
          </Text>
        </View>
      </ScrollView>

      <View style={commonStyles.scrollHint} />

      <View style={commonStyles.buttonContainer}>
        <TouchableOpacity 
          style={[commonStyles.navButton, commonStyles.backButton]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={commonStyles.navButtonTextDark}>Back</Text>
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

export default PreTripAirportTransfer;
