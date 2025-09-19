import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import {
  Alert,
  Linking,
  Platform,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { getStatusColor } from '@/app/utils/statusColors';
import { STRINGS } from '@/constants/strings';
import { COLORS } from '@/constants/styles';
import { commonStyles } from '@/styles/common';

export default function TaskDetailScreen() {
  const { task } = useLocalSearchParams();
  const taskData = task ? JSON.parse(task as string) : null;

  // Handle case where task data is not available
  if (!taskData) {
    return (
      <View style={commonStyles.container}>
        <Text>{STRINGS.COMMON.TASK_NOT_FOUND}</Text>
      </View>
    );
  }

  /**
   * Opens the device's default maps app with the task's address
   * Uses platform-specific URL schemes for iOS and Android
   */
  const openMaps = () => {
    const url = Platform.select({
      ios: `maps:0,0?q=${encodeURIComponent(taskData.address)}`,
      android: `geo:0,0?q=${encodeURIComponent(taskData.address)}`
    }) || '';
    
    Linking.openURL(url).catch(err => {
      Alert.alert(STRINGS.COMMON.ERROR, STRINGS.COMMON.COULD_NOT_OPEN_MAPS);
    });
  };

  return (
    <SafeAreaView style={commonStyles.safeArea}>
      <View style={commonStyles.card}>
        <View style={[commonStyles.row, commonStyles.spaceBetween, { marginBottom: 20, flexWrap: 'wrap' }]}>
          <Text style={[commonStyles.textTitle, commonStyles.flex1, { marginRight: 12 }]}>{taskData.title}</Text>
          <View style={[commonStyles.statusBadge, { backgroundColor: getStatusColor(taskData.status) }]}>
            <Text style={commonStyles.statusText}>{taskData.status}</Text>
          </View>
        </View>

        <View style={commonStyles.section}>
          <Text style={commonStyles.sectionTitle}>{STRINGS.TASK_DETAIL.DESCRIPTION}</Text>
          <Text style={commonStyles.textBody}>{taskData.description}</Text>
        </View>

        <View style={commonStyles.section}>
          <Text style={commonStyles.sectionTitle}>{STRINGS.TASK_DETAIL.DATE_AND_TIME}</Text>
          <Text style={commonStyles.textBody}>
            {new Date(taskData.dateTime).toLocaleString()}
          </Text>
        </View>

        <View style={commonStyles.section}>
          <Text style={commonStyles.sectionTitle}>{STRINGS.TASK_DETAIL.LOCATION}</Text>
          <TouchableOpacity onPress={openMaps}>
            <View style={styles.addressContainer}>
              <Ionicons name="location" size={20} color={COLORS.INFO} />
              <Text style={styles.addressText}>{taskData.address}</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={commonStyles.section}>
          <Text style={commonStyles.sectionTitle}>{STRINGS.TASK_DETAIL.CREATED_AT}</Text>
          <Text style={commonStyles.textBody}>
            {new Date(taskData.createdAt).toLocaleString()}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = {
  addressContainer: {
    flexDirection: 'row' as const,
    alignItems: 'flex-start' as const,
  },
  addressText: {
    marginLeft: 8,
    flex: 1,
    color: COLORS.INFO,
    fontSize: 16,
    lineHeight: 24,
  },
};