import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import common styles

const LandingPassportControl = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image 
        source={require('../assets/page_logos/15.png')}
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Proceed to Passport Control</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Immigration Process:</Text>
          <Text style={commonStyles.paragraphText}>
            If traveling internationally, head to the Immigration area. Here, you will need to present your passport. This step is important, but don't worry—it’s a routine part of the process, and the officers are there to help.
          </Text>

          <Text style={commonStyles.boldText}>Visa Check:</Text>
          <Text style={commonStyles.paragraphText}>
            If required, the officer will check your visa or travel permit. This is a quick and standard procedure to make sure everything is in order. If you're unsure about anything, just ask the officer—they are used to helping travelers and will guide you through.
          </Text>

          <Text style={commonStyles.boldText}>Answer Questions:</Text>
          <Text style={commonStyles.paragraphText}>
            You may be asked a few simple questions by the immigration officer, like the purpose of your trip or how long you plan to stay. These questions are normal, and they help ensure that everything is clear and in place for your visit.
          </Text>

          <Text style={commonStyles.boldText}>Additional Documents:</Text>
          <Text style={commonStyles.paragraphText}>
            Depending on where you’re traveling, the officer might ask for additional documents such as hotel bookings, your return flight details, or proof of sufficient funds for your stay. If you have these documents ready, the process will go smoothly. Don’t stress—it's just a way to verify your travel plans.
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

export default LandingPassportControl;
