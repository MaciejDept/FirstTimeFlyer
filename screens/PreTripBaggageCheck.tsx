import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles'; // Import the commonStyles
import { useLanguage } from '../i18n';

const PreTripBaggageCheck = ({ navigation }: any) => {
  const { t } = useLanguage();
  return (
    <View style={commonStyles.container}>
      <Image
        source={require('../assets/page_logos/3.png')}
        style={commonStyles.image}
      />

      <Text style={commonStyles.title}>{t('baggageCheck', 'title')}</Text>

      <ScrollView
        style={commonStyles.scrollContainer}
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>{t('baggageCheck', 'heading1')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('baggageCheck', 'body1')}
          </Text>
          <Text style={commonStyles.paragraphText}>
            {t('baggageCheck', 'body2')}
          </Text>

          <Text style={commonStyles.boldText}>{t('baggageCheck', 'heading2')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('baggageCheck', 'body3')}
          </Text>
          <Text style={commonStyles.paragraphText}>
            {t('baggageCheck', 'body4')}
          </Text>

          <Text style={commonStyles.boldText}>{t('baggageCheck', 'heading3')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('baggageCheck', 'body5')}
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

export default PreTripBaggageCheck;
