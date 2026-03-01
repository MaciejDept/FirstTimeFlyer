import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import commonStyles
import { useLanguage } from '../i18n';

const FlightDaySecurityCheck = ({ navigation }: any) => {
  const { t } = useLanguage();
  return (
    <View style={commonStyles.container}>
      {/* Image section placed above the title */}
      <Image
        source={require('../assets/page_logos/9.png')}
        style={commonStyles.image}
      />

      <Text style={commonStyles.title}>{t('securityCheck', 'title')}</Text>

      <ScrollView
        style={commonStyles.scrollContainer}
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>{t('securityCheck', 'heading1')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('securityCheck', 'body1')}
          </Text>

          <Text style={commonStyles.boldText}>{t('securityCheck', 'heading2')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('securityCheck', 'body2')}
          </Text>

          <Text style={commonStyles.boldText}>{t('securityCheck', 'heading3')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('securityCheck', 'body3')}
          </Text>

          <Text style={commonStyles.boldText}>{t('securityCheck', 'heading4')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('securityCheck', 'body4')}
          </Text>

          <Text style={commonStyles.boldText}>{t('securityCheck', 'heading5')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('securityCheck', 'body5')}
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
          <Text style={commonStyles.navButtonTextDark}>{t('common', 'back')}</Text>
        </TouchableOpacity>

        {/* Checklist Button */}
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

export default FlightDaySecurityCheck;
