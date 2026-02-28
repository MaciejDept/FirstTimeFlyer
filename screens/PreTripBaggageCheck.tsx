import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import the commonStyles

const PreTripBaggageCheck = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      <Image 
        source={require('../assets/page_logos/3.png')} 
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Baggage Check</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Carry-on bag:</Text>
          <Text style={commonStyles.paragraphText}>
            When packing your carry-on, remember that most airlines allow one small suitcase or bag in the cabin. Typically, the size and weight limit for carry-on luggage is between 7-10 kg. Be sure to check your airline’s guidelines for specific details. You’ll need to store it in the overhead bin or under the seat in front of you. If you’re unsure about the size, it’s always a good idea to check on your airline’s website or ask the airline staff at the check-in counter.
          </Text>
          <Text style={commonStyles.paragraphText}>
            Also, don't forget about liquids! They must be in containers of 100ml or less and placed in a clear, resealable plastic bag. If you bring any liquids over this amount, they might be confiscated at security.
          </Text>

          <Text style={commonStyles.boldText}>Checked luggage:</Text>
          <Text style={commonStyles.paragraphText}>
            Checked luggage refers to large suitcases that are stored in the airplane’s hold. Be sure to check the size and weight limits for checked luggage with your airline, as exceeding these limits could result in extra fees. Most airlines allow one or two checked bags. 
          </Text>
          <Text style={commonStyles.paragraphText}>
            Avoid packing prohibited items such as sharp objects, large liquids, or aerosols. If you’re not sure whether something is allowed, check the airline's website or consult airport staff for clarification.
          </Text>

          <Text style={commonStyles.boldText}>Baggage allowance and fees:</Text>
          <Text style={commonStyles.paragraphText}>
            If you’re unsure about your baggage allowance, check your airline's baggage policy on their website. Some airlines charge for checked luggage or impose extra charges for weight overages. It's always good to know ahead of time to avoid surprise fees at the airport. If you have multiple bags or oversized luggage, confirm the fees and policies beforehand.
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

export default PreTripBaggageCheck;
