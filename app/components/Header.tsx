import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { memo, useCallback } from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { COLORS, ICON_SIZE } from "@/constants/styles";
import { commonStyles } from "@/styles/common";
interface HeaderProps {
    title: string;
    showSortButton?: boolean;
    onSortPress?: () => void;
    showAddButton?: boolean;
}

export const Header: React.FC<HeaderProps> = memo(({ 
    title, 
    showSortButton = true, 
    onSortPress, 
    showAddButton = true 
}) => {
    const router = useRouter();

    const handleAddPress = useCallback(() => {
        router.push("/addTask");
    }, [router]);

    return (
        <View style={commonStyles.header}>
            <Text style={commonStyles.headerTitle}>{title}</Text>
            <View style={commonStyles.headerActions}>
                {showSortButton && onSortPress && (
                    <TouchableOpacity 
                        style={commonStyles.headerButton} 
                        onPress={onSortPress}
                        activeOpacity={0.7}
                    >
                        <Ionicons 
                            name="filter-outline" 
                            size={ICON_SIZE.MD} 
                            color={COLORS.TEXT_PRIMARY} 
                        />
                    </TouchableOpacity>
                )}
                {showAddButton && (
                    <TouchableOpacity 
                        style={[commonStyles.headerButton, { backgroundColor: COLORS.PRIMARY }]} 
                        onPress={handleAddPress}
                        activeOpacity={0.7}
                    >
                        <Ionicons 
                            name="add" 
                            size={ICON_SIZE.MD} 
                            color={COLORS.WHITE} 
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
});
