import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, View } from 'react-native';

import { COLORS, ICON_SIZE } from '@/constants/styles';
import { commonStyles } from '@/styles/common';

interface EmptyListProps {
  icon?: string;
  title: string;
  subtitle?: string;
}

export const EmptyList: React.FC<EmptyListProps> = ({
  icon = 'document-text',
  title,
  subtitle,
}) => {
  return (
    <View style={commonStyles.emptyState}>
      <Ionicons 
        name={icon as any} 
        size={ICON_SIZE.XXL} 
        color={COLORS.TEXT_LIGHT} 
      />
      <Text style={commonStyles.emptyStateText}>{title}</Text>
      {subtitle && <Text style={commonStyles.emptyStateSubtext}>{subtitle}</Text>}
    </View>
  );
};