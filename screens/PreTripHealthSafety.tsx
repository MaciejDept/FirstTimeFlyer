import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles';  // Import commonStyles
import { useLanguage } from '../i18n';

const PreTripHealthSafety = ({ navigation }: any) => {
  const { t } = useLanguage();
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image
        source={require('../assets/page_logos/6.png')} // Replace with your actual image
        style={commonStyles.image}
      />

      <Text style={commonStyles.title}>{t('healthSafety', 'title')}</Text>

      <ScrollView
        style={commonStyles.scrollContainer}
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>{t('healthSafety', 'heading1')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('healthSafety', 'body1')}
          </Text>

          <Text style={commonStyles.boldText}>{t('healthSafety', 'heading2')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('healthSafety', 'body2')}
          </Text>
        </View>
      </ScrollView>

      <View style={commonStyles.scrollHint} />

      <View style={commonStyles.buttonContainer}>
        <TouchableOpacity
          style={[commonStyles.navButton, commonStyles.backButton]}
          onPress={() => navigation.goBack()}
        >
          <Text style={commonStyles.navButtonTextDark}>{t('common', 'back')}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[commonStyles.navButton, commonStyles.checklistButton]}
          onPress={() => navigation.navigate('ChecklistScreen')}
        >
          <Text style={commonStyles.navButtonText}>{t('common', 'checklist')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PreTripHealthSafety;
