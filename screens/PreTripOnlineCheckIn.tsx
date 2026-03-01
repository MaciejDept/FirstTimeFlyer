import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import commonStyles from '../commonStyles';
import { useLanguage } from '../i18n';

const PreTripOnlineCheckIn = ({ navigation }: any) => {
  const { t } = useLanguage();
  return (
    <View style={commonStyles.container}>
      <Image
        source={require('../assets/page_logos/2.png')}
        style={commonStyles.image}
      />

      <Text style={commonStyles.title}>{t('onlineCheckIn', 'title')}</Text>

      <ScrollView
        style={commonStyles.scrollContainer}
        contentContainerStyle={commonStyles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={commonStyles.listContainer}>
          <Text style={commonStyles.boldText}>{t('onlineCheckIn', 'heading1')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('onlineCheckIn', 'body1')}
          </Text>

          <Text style={commonStyles.boldText}>{t('onlineCheckIn', 'heading2')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('onlineCheckIn', 'body2')}
          </Text>

          <Text style={commonStyles.boldText}>{t('onlineCheckIn', 'heading3')}</Text>
          <Text style={commonStyles.paragraphText}>
            {t('onlineCheckIn', 'body3')}
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

export default PreTripOnlineCheckIn;
