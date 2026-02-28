import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import commonStyles

const FlightDayArriveAtAirport = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/7.png')}
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Arrive at the Airport</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          
          <Text style={commonStyles.boldText}>Arrive 2-3 hours before departure:</Text>
          <Text style={commonStyles.paragraphText}>
            It's a good idea to arrive at the airport a bit earlier than you might think. This will give you enough time to check in, go through security, and handle any unexpected delays, like long lines or last-minute changes. Being early also helps reduce any stress, so you can start your journey feeling calm and confident.
          </Text>

          <Text style={commonStyles.boldText}>International Flights:</Text>
          <Text style={commonStyles.paragraphText}>
            For international flights, it's especially important to arrive with plenty of time. There are a few extra steps, like check-in, security, and customs, that can take a little longer than on domestic flights. Giving yourself the full 3 hours ensures you won't feel rushed and can calmly go through the process. It's perfectly normal to feel a bit nervous, but know that there will be plenty of signs and helpful staff to guide you along the way.
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

export default FlightDayArriveAtAirport;
