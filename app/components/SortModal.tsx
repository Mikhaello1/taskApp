import { Ionicons } from "@expo/vector-icons";
import React, { memo, useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { ModalComponent } from "@/app/components/Modal";
import { STRINGS } from "@/constants/strings";
import { COLORS, FONT_SIZE, FONT_WEIGHT, ICON_SIZE, SPACING } from "@/constants/styles";
import { commonStyles } from "@/styles/common";

interface SortModalProps {
    visible: boolean;
    onClose: () => void;
    sortBy: string;
    onSortChange: (sortBy: string) => void;
}

export const SortModal: React.FC<SortModalProps> = memo(({ 
    visible, 
    onClose, 
    sortBy, 
    onSortChange 
}) => {
    const sortOptions = [
        { sortKey: STRINGS.SORT_BY.DATE_ADDED, label: STRINGS.SORT.DATE_ADDED, icon: "calendar-outline" },
        { sortKey: STRINGS.SORT_BY.STATUS, label: STRINGS.SORT.STATUS, icon: "flag-outline" },
    ];

    const handleSortSelect = useCallback((sortKey: string) => {
        onSortChange(sortKey);
        onClose();
    }, [onSortChange, onClose]);

    return (
        <ModalComponent visible={visible} onClose={onClose}>
            <Text style={commonStyles.modalTitle}>Sort By</Text>
            <View style={{ gap: SPACING.P2 }}>
                {sortOptions.map(({ sortKey, label, icon }) => (
                    <TouchableOpacity
                        key={sortKey}
                        style={[
                            commonStyles.row, 
                            { 
                                paddingVertical: SPACING.P3,
                                paddingHorizontal: SPACING.P2,
                                borderRadius: 8,
                                backgroundColor: sortBy === sortKey ? COLORS.PRIMARY_50 : 'transparent'
                            }
                        ]}
                        onPress={() => handleSortSelect(sortKey)}
                        activeOpacity={0.7}
                    >
                        <Ionicons 
                            name={icon as any} 
                            size={ICON_SIZE.MD} 
                            color={sortBy === sortKey ? COLORS.PRIMARY : COLORS.TEXT_SECONDARY} 
                        />
                        <Text style={[
                            { 
                                marginLeft: SPACING.P3, 
                                fontSize: FONT_SIZE.TEXT_BASE, 
                                color: sortBy === sortKey ? COLORS.PRIMARY : COLORS.TEXT_PRIMARY,
                                fontWeight: sortBy === sortKey ? FONT_WEIGHT.SEMI_BOLD : FONT_WEIGHT.REGULAR
                            }
                        ]}>
                            {label}
                        </Text>
                        {sortBy === sortKey && (
                            <Ionicons 
                                name="checkmark-circle" 
                                size={ICON_SIZE.MD} 
                                color={COLORS.PRIMARY} 
                                style={{ marginLeft: 'auto' }}
                            />
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </ModalComponent>
    );
});
