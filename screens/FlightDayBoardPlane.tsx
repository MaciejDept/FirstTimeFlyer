import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import the common styles
import { useLanguage } from '../i18n';

const FlightDayBoardPlane = ({ navigation }: any) => {
  const { t } = useLanguage();
  return (
    <View style={commonStyles.container}>
      {/* Image */}
      <Image
        source={require('../assets/page_logos/12.png')}
        style={commonStyles.image}
      />

      <Text style={commonStyles.title}>{t('boardPlane', 'title')}</Text>

      <ScrollView
        style={commonStyles.scrollContainer}
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Bullet points container */}
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>{t('boardPlane', 'heading1')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('boardPlane', 'body1')}
          </Text>

          <Text style={commonStyles.boldText}>{t('boardPlane', 'heading2')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('boardPlane', 'body2')}
          </Text>

          <Text style={commonStyles.boldText}>{t('boardPlane', 'heading3')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('boardPlane', 'body3')}
          </Text>

          <Text style={commonStyles.boldText}>{t('boardPlane', 'heading4')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('boardPlane', 'body4')}
          </Text>

          <Text style={commonStyles.boldText}>{t('boardPlane', 'heading5')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('boardPlane', 'body5')}
          </Text>

          <Text style={commonStyles.boldText}>{t('boardPlane', 'heading6')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('boardPlane', 'body6')}
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

export default FlightDayBoardPlane;
