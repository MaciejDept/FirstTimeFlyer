import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import commonStyles

const FlightDaySecurityCheck = ({ navigation }: any) => {
  return (
    <View style={commonStyles.container}>
      {/* Image section placed above the title */}
      <Image 
        source={require('../assets/page_logos/9.png')}
        style={commonStyles.image}  
      />

      <Text style={commonStyles.title}>Security Check</Text>
      
      <ScrollView 
        style={commonStyles.scrollContainer} 
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>Go to the security checkpoint:</Text>
          <Text style={commonStyles.paragraphText}>
            When you reach the security checkpoint, you’ll need to remove any liquids, electronics, and possibly your shoes. Don’t worry if you're unsure about what to do — the security staff is there to guide you. Just follow their instructions, and everything will be fine.
          </Text>

          <Text style={commonStyles.boldText}>Have your boarding pass and ID ready:</Text>
          <Text style={commonStyles.paragraphText}>
            Make sure you have your boarding pass and ID handy, as you’ll need to show them at the security checkpoint. It’s a simple process — just have them out and ready, and the staff will help you move along smoothly.
          </Text>

          <Text style={commonStyles.boldText}>Liquids:</Text>
          <Text style={commonStyles.paragraphText}>
            If you’re carrying liquids in your carry-on, remember that they need to be in containers of 100 ml or less, and placed in a clear, resealable plastic bag. It's a good idea to prepare this in advance so you can quickly take it out when you're at the checkpoint. If you're unsure about any liquids, you can always check with a staff member.
          </Text>

          <Text style={commonStyles.boldText}>Laptops and Electronics:</Text>
          <Text style={commonStyles.paragraphText}>
            If you have a laptop or other larger electronics in your carry-on, you’ll need to remove them from your bag and place them in a separate bin for screening. This helps the security staff see clearly through your bag. It’s completely normal, and the staff will guide you through the process if needed.
          </Text>

          <Text style={commonStyles.boldText}>Metal detectors:</Text>
          <Text style={commonStyles.paragraphText}>
            At the security checkpoint, you’ll likely need to go through a metal detector. It’s normal, and it’s just part of the process to keep everyone safe. If you have any items like jewelry or belts with metal, it’s best to take them off beforehand to avoid delays. You may also be asked to place your carry-on bag on a conveyor belt for screening.
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

export default FlightDaySecurityCheck;
