import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import common styles

const LandingExitAirport = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/17.png')}
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Exit the Airport</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Customs:</Text>
          <Text style={commonStyles.paragraphText}>
            After retrieving your luggage, follow signs to Customs (green or red channel). Most passengers take the green channel if they have nothing to declare—this means you’re not carrying any items that need to be checked or taxed. If you have items such as large amounts of cash, alcohol, tobacco, or certain goods like food, plants, or medication, you may need to head to the red channel to declare them. It’s important to declare these items to avoid any penalties. Don’t worry if you’re unsure; the signs are clearly marked, and airport staff is available to guide you through the process.
          </Text>

          <Text style={commonStyles.boldText}>Arrival Hall:</Text>
          <Text style={commonStyles.paragraphText}>
            Once you’ve cleared customs, you’ll be in the Arrival Hall. Congratulations, you’ve made it! This is the area where you’ll begin your adventure. It’s normal to feel a bit overwhelmed, but take a deep breath, and take your time. You’re doing great. The arrival hall is where you’ll start to get a sense of your new surroundings and get ready to continue your journey.
          </Text>

          <Text style={commonStyles.boldText}>Amenities:</Text>
          <Text style={commonStyles.paragraphText}>
            In the Arrival Hall, you’ll find services like SIM card kiosks, currency exchange, and other amenities like free Wi-Fi or information desks to help you with any last-minute questions or needs. If you need a moment to settle in or find your bearings, these amenities are there to make your arrival smoother. Whether you need to make a quick call, exchange money, or get some helpful directions, these services are designed to make your arrival more comfortable.
          </Text>

          <Text style={commonStyles.boldText}>Exit:</Text>
          <Text style={commonStyles.paragraphText}>
            After you’ve settled in the Arrival Hall, follow the signs to the exit. This will lead you to the transport area, whether you're taking a taxi, shuttle, or public transport. Don’t hesitate to ask for directions if you’re unsure of where to go. Airport staff and signs are there to assist you in getting to your transport smoothly. Whether you're heading to your hotel, exploring the city, or meeting someone, you’re all set to begin your journey!
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

export default LandingExitAirport;
