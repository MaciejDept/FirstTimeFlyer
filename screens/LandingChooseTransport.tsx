import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import common styles

const LandingChooseTransport = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image section placed above the title */}
      <Image 
        source={require('../assets/page_logos/18.png')}
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
            Head to the official taxi rank for a licensed ride. Taxis are a convenient and reliable way to get to your destination, and the drivers are experienced in helping travelers. If you’re not sure where to go, feel free to ask an airport staff member for directions.
          </Text>

          <Text style={commonStyles.boldText}>Ride-sharing:</Text>
          <Text style={commonStyles.paragraphText}>
            Look for Uber or Lyft pickup zones, usually marked clearly in the airport. These services can be a more flexible option, as you can book a ride directly from your phone. The signs in the airport will guide you to the designated area, so it’s easy to find.
          </Text>

          <Text style={commonStyles.boldText}>Shuttle Service:</Text>
          <Text style={commonStyles.paragraphText}>
            Some hotels provide an airport shuttle; check if your hotel offers this. Shuttle services are often free or low-cost and can take you directly to your hotel. If you're unsure whether your hotel offers this, it’s always a good idea to check in advance or ask the airport staff for assistance.
          </Text>

          <Text style={commonStyles.boldText}>Public Transport:</Text>
          <Text style={commonStyles.paragraphText}>
            Find train, metro, or bus stations for budget-friendly transport options. Many airports have easy access to public transport, and it can be a great way to save money if you're comfortable with it. Just follow the signs to the train or bus station, and make sure to have your destination address ready. Don’t worry—airport staff can guide you if you need help finding your way.
          </Text>

          <Text style={commonStyles.boldText}>Checklist:</Text>
          <Text style={commonStyles.paragraphText}>
          You’ve made it through all the steps, and now it’s time to begin the next chapter of your journey. Whether you’re heading to a new city or meeting loved ones, take a moment to appreciate the excitement ahead. Check the final item off the list and enjoy your new adventure!
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
