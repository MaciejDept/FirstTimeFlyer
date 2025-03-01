import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles';

const PreTripPackYourBags = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      <Image 
        source={require('../assets/page_logos/3.png')} 
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Pack Your Bags</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Essentials:</Text>
          <Text style={commonStyles.paragraphText}>
            Pack essentials like your passport/ID, travel documents (e.g., boarding pass, visa if required), wallet, phone, charger. Make sure your passport is valid and not expired before your departure to avoid any issues at check-in. 
            It's always a good idea to keep a photocopy of your passport, visa, and other important documents in a separate bag, just in case anything gets lost.
          </Text>

          <Text style={commonStyles.boldText}>Toiletries:</Text>
          <Text style={commonStyles.paragraphText}>
            Pack liquids and gels in small containers (under 100ml) for carry-on, or store them in your checked luggage in case you have larger containers. Airport security is strict about liquids, so make sure to follow the 100ml rule to avoid any delays. You can bring as many 100ml containers as you want, but they must fit into a single, clear, resealable plastic bag that holds no more than 1 liter. 
            Bring the essentials like toothpaste, deodorant, and any prescription medications you might need. If you’re taking medication, make sure to keep it in your carry-on bag, along with a doctor's note if required. Remember, travel-sized toiletries will save space and make it easier to go through security. 
            You might also want to bring facial wipes, hand sanitiser, or facial masks for extra comfort and hygiene during your journey.
          </Text>

          <Text style={commonStyles.boldText}>Entertainment:</Text>
          <Text style={commonStyles.paragraphText}>
            Download books, music, or shows to keep entertained during the flight. Flights can sometimes feel long, but having a variety of entertainment options will help pass the time. Don’t forget to bring a power bank to keep your devices charged, especially on longer flights. Airports and planes often have charging stations, but it’s always safer to have your own backup. 
            Noise-canceling headphones or a good pair of earplugs can help make the flight more relaxing, especially if you're sensitive to noise. If you’re nervous about flying, consider listening to calming music or guided meditations to keep yourself relaxed and comfortable.
          </Text>

          <Text style={commonStyles.boldText}>Clothing:</Text>
          <Text style={commonStyles.paragraphText}>
            Pack clothing according to your destination’s weather. If you’re flying internationally, pack layers and prepare for both warm and cold climates. Consider packing an extra set of clothes in your carry-on in case your checked luggage gets delayed or lost. 
            Comfortable shoes are essential for long travel days, and don't forget socks and undergarments especially if it's a long flight.
          </Text>

          <Text style={commonStyles.boldText}>Snacks and Water:</Text>
          <Text style={commonStyles.paragraphText}>
            Pack some snacks like granola bars, nuts, or dried fruit to keep your energy up during the flight. Avoid salty snacks that might dehydrate you. You can bring an empty water bottle through security to fill up after passing through, ensuring you stay hydrated throughout the flight. 
            Keeping your hydration up is key to reducing the effects of jet lag.
          </Text>
        </View>
      </ScrollView>

      <View style={commonStyles.scrollHint} />

      <View style={commonStyles.buttonContainer}>
        <TouchableOpacity 
          style={[commonStyles.navButton, commonStyles.backButton]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={commonStyles.navButtonText}>Back</Text>
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

export default PreTripPackYourBags;
