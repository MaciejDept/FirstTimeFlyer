import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';

const PreTripPackYourBags = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/3.png')} 
        style={styles.image}  
      />

      <Text style={styles.title}>Pack Your Bags</Text>
      
      <ScrollView 
        style={styles.scrollContainer} 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={styles.listContainer}>
          <View style={styles.bulletContainer}>
            <Text style={styles.boldText}>Essentials:</Text>
            <Text style={styles.paragraphText}>
              Pack essentials like your passport/ID, travel documents (e.g., boarding pass, visa if required), wallet, phone, charger. Make sure your passport is valid and not expired before your departure to avoid any issues at check-in. 
              It's always a good idea to keep a photocopy of your passport, visa, and other important documents in a separate bag, just in case anything gets lost.
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <Text style={styles.boldText}>Toiletries:</Text>
            <Text style={styles.paragraphText}>
              Pack liquids and gels in small containers (under 100ml) for carry-on, or store them in your checked luggage in case you have larger containers. Airport security is strict about liquids, so make sure to follow the 100ml rule to avoid any delays. You can bring as many 100ml containers as you want, but they must fit into a single, clear, resealable plastic bag that holds no more than 1 liter. 
              Bring the essentials like toothpaste, deodorant, and any prescription medications you might need. If you’re taking medication, make sure to keep it in your carry-on bag, along with a doctor's note if required. Remember, travel-sized toiletries will save space and make it easier to go through security. 
              You might also want to bring facial wipes, hand sanitiser, or facial masks for extra comfort and hygiene during your journey.
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <Text style={styles.boldText}>Entertainment:</Text>
            <Text style={styles.paragraphText}>
              Download books, music, or shows to keep entertained during the flight. Flights can sometimes feel long, but having a variety of entertainment options will help pass the time. Don’t forget to bring a power bank to keep your devices charged, especially on longer flights. Airports and planes often have charging stations, but it’s always safer to have your own backup. 
              Noise-canceling headphones or a good pair of earplugs can help make the flight more relaxing, especially if you're sensitive to noise. If you’re nervous about flying, consider listening to calming music or guided meditations to keep yourself relaxed and comfortable.
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <Text style={styles.boldText}>Clothing:</Text>
            <Text style={styles.paragraphText}>
              Pack clothing according to your destination’s weather. If you’re flying internationally, pack layers and prepare for both warm and cold climates. Consider packing an extra set of clothes in your carry-on in case your checked luggage gets delayed or lost. 
              Comfortable shoes are essential for long travel days, and don't forget socks and undergarments especially if it's a long flight.
            </Text>
          </View>

          <View style={styles.bulletContainer}>
            <Text style={styles.boldText}>Snacks and Water:</Text>
            <Text style={styles.paragraphText}>
              Pack some snacks like granola bars, nuts, or dried fruit to keep your energy up during the flight. Avoid salty snacks that might dehydrate you. You can bring an empty water bottle through security to fill up after passing through, ensuring you stay hydrated throughout the flight. 
              Keeping your hydration up is key to reducing the effects of jet lag.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Gradient Overlay for Scroll Hint */}
      <View style={styles.scrollHint} />

      {/* Bottom Buttons */}
      <View style={styles.buttonContainer}>
        {/* Back Button */}
        <TouchableOpacity 
          style={[styles.navButton, styles.backButton]} 
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.navButtonText}>Back</Text>
        </TouchableOpacity>

        {/* Checklist Button */}
        <TouchableOpacity 
          style={[styles.navButton, styles.checklistButton]} 
          onPress={() => navigation.navigate('ChecklistScreen')}
        >
          <Text style={styles.navButtonText}>Checklist</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
    paddingTop: 40, // Space for title
    paddingHorizontal: 25, // Added horizontal padding for better spacing
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333',
    textAlign: 'center',
    marginHorizontal: 20, // Added margin for better spacing
  },
  listContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 30,
    width: '100%',
  },
  bulletContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 20, // Increased bottom margin for spacing between points
    width: '100%',
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
    color: '#333',
    marginHorizontal: 15,
  },
  paragraphText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
    lineHeight: 28,
    textAlign: 'left',
    marginHorizontal: 15,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 20,
    marginBottom: 5,
    alignSelf: 'center',
  },
  scrollHint: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: 'rgba(232, 232, 232, 0.9)',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 5,
  },
  backButton: {
    backgroundColor: '#5DA3A3',
    borderColor: '#417D7D',
  },
  checklistButton: {
    backgroundColor: '#5DA3A3',
    borderColor: '#417D7D',
  },
  navButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PreTripPackYourBags;
