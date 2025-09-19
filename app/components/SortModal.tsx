import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { ModalComponent } from '@/app/components/Modal';
import { STRINGS } from '@/constants/strings';
import { COLORS } from '@/constants/styles';
import { commonStyles } from '@/styles/common';

interface SortModalProps {
  visible: boolean;
  onClose: () => void;
  sortBy: string;
  onSortChange: (sortBy: string) => void;
}

export const SortModal: React.FC<SortModalProps> = ({
  visible,
  onClose,
  sortBy,
  onSortChange,
}) => {
  const sortOptions = [
    { sortKey: STRINGS.SORT_BY.DATE_ADDED, label: STRINGS.SORT.DATE_ADDED },
    { sortKey: STRINGS.SORT_BY.STATUS, label: STRINGS.SORT.STATUS },
  ];

  return (
    <ModalComponent visible={visible} onClose={onClose}>
      <Text style={commonStyles.modalTitle}>Sort By</Text>
      {sortOptions.map(({sortKey, label}) => (
        <TouchableOpacity
          key={sortKey}
          style={[commonStyles.row, { paddingVertical: 12 }]}
          onPress={() => {
            onSortChange(sortKey);
            onClose();
          }}
        >
          <Ionicons 
            name={sortBy === sortKey ? 'radio-button-on' : 'radio-button-off'} 
            size={24} 
            color={COLORS.TEXT_PRIMARY} 
          />
          <Text style={{ marginLeft: 12, fontSize: 16, color: COLORS.TEXT_PRIMARY }}>{label}</Text>
        </TouchableOpacity>
      ))}
    </ModalComponent>
  );
};
