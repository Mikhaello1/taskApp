import React from 'react';
import { Modal, TouchableWithoutFeedback, View } from 'react-native';

import { commonStyles } from '@/styles/common';

interface ModalProps {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  animationType?: 'fade' | 'slide' | 'none';
}

export const ModalComponent: React.FC<ModalProps> = ({
  visible,
  onClose,
  children,
  animationType = 'fade',
}) => {
  return (
    <Modal
      animationType={animationType}
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={commonStyles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={commonStyles.modalContent}>
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
