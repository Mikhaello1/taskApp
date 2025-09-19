import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { commonStyles } from '@/styles/common';
import { COLORS } from '@/constants/styles';

interface HeaderProps {
  title: string;
  showSortButton?: boolean;
  onSortPress?: () => void;
  showAddButton?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  showSortButton = true,
  onSortPress,
  showAddButton = true,
}) => {
  const router = useRouter();

  return (
    <View style={commonStyles.header}>
      <Text style={commonStyles.headerTitle}>{title}</Text>
      <View style={commonStyles.headerActions}>
        {showSortButton && (
          <TouchableOpacity 
            style={commonStyles.headerButton}
            onPress={onSortPress}
          >
            <Ionicons name="filter" size={24} color={COLORS.TEXT_PRIMARY} />
          </TouchableOpacity>
        )}
        {showAddButton && (
          <TouchableOpacity
            style={commonStyles.headerButton}
            onPress={() => router.push('/addTask')}
          >
            <Ionicons name="add" size={24} color={COLORS.PRIMARY} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};