import { Ionicons } from "@expo/vector-icons";
import React, { memo } from "react";
import { Text, View } from "react-native";

import { COLORS, ICON_SIZE } from "@/constants/styles";
import { commonStyles } from "@/styles/common";

interface EmptyListProps {
    icon?: string;
    title: string;
    subtitle?: string;
}

export const EmptyList: React.FC<EmptyListProps> = memo(({ 
    icon = "document-text-outline", 
    title, 
    subtitle 
}) => {
    return (
        <View style={commonStyles.emptyState}>
            <Ionicons 
                name={icon as any} 
                size={ICON_SIZE.XXXL} 
                color={COLORS.TEXT_LIGHT} 
            />
            <Text style={commonStyles.emptyStateText}>{title}</Text>
            {subtitle && <Text style={commonStyles.emptyStateSubtext}>{subtitle}</Text>}
        </View>
    );
});
