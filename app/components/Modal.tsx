import React, { memo } from "react";
import { Modal, TouchableWithoutFeedback, View } from "react-native";

import { commonStyles } from "@/styles/common";

interface ModalProps {
    visible: boolean;
    onClose: () => void;
    children: React.ReactNode;
    animationType?: "fade" | "slide" | "none";
    dismissable?: boolean;
}

export const ModalComponent: React.FC<ModalProps> = memo(({ 
    visible, 
    onClose, 
    children, 
    animationType = "fade",
    dismissable = true 
}) => {
    const handleOverlayPress = () => {
        if (dismissable) {
            onClose();
        }
    };

    return (
        <Modal 
            animationType={animationType} 
            transparent={true} 
            visible={visible} 
            onRequestClose={onClose}
            statusBarTranslucent={true}
        >
            <TouchableWithoutFeedback onPress={handleOverlayPress}>
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
});
