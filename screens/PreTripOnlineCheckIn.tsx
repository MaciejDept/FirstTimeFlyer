import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; 

const PreTripOnlineCheckIn = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      <Image 
        source={require('../assets/page_logos/2.png')} 
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Online Check-In</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Check-in window:</Text>
          <Text style={commonStyles.paragraphText}>
            Most airlines allow you to check in 24-48 hours before your flight. It’s a good idea to check in online as soon as the window opens to avoid long lines at the airport and ensure your seat preference is secured. Online check-in can be done via the airline’s website or app, and it will save you time and stress on the day of your flight. If you don’t check in online, you’ll need to do so at the airport, which could take longer, especially during busy travel times. If you're unsure about how to check in, the airline's customer service team will be happy to help.
          </Text>

          <Text style={commonStyles.boldText}>Personal details:</Text>
          <Text style={commonStyles.paragraphText}>
            During online check-in, you’ll be asked to provide some personal details, such as your passport number (if traveling internationally), your contact information, and any special requests you might have (like assistance with mobility). This is also the time to confirm your travel details, such as baggage allowance and seat preferences. It’s important to make sure the details are correct, so double-check everything before finalizing your check-in. Don’t worry—it’s a quick process, and once done, you’ll be one step closer to your adventure!
          </Text>

          <Text style={commonStyles.boldText}>Boarding pass:</Text>
          <Text style={commonStyles.paragraphText}>
            Once you’ve completed check-in, you’ll receive your boarding pass. This is your ticket to the plane! You can either print it out or save it on your phone (many airlines have mobile apps that allow you to access it digitally). If you choose to go digital, just make sure your phone is charged and that you can access the boarding pass easily when needed. The boarding pass will include important details like your flight number, departure gate, and boarding time. Make sure to keep it handy when you go through security and at the gate later — it’s your key to getting on board!
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

export default PreTripOnlineCheckIn;
