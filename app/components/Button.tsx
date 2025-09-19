import React, { memo } from "react";
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

import { COLORS, DESIGN_TOKENS, FONT_SIZE, FONT_WEIGHT, SPACING } from "@/constants/styles";
import { commonStyles } from "@/styles/common";

interface ButtonProps {
    title: string;
    onPress: () => void;
    variant?: "primary" | "secondary" | "danger" | "ghost";
    size?: "small" | "medium" | "large";
    disabled?: boolean;
    loading?: boolean;
    style?: ViewStyle;
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = memo(({ 
    title, 
    onPress, 
    variant = "primary", 
    size = "medium", 
    disabled = false, 
    loading = false, 
    style,
    icon 
}) => {
    const buttonStyle = [
        commonStyles.button, 
        styles[variant], 
        styles[size], 
        disabled && styles.disabled, 
        style
    ];

    const textStyle = [
        commonStyles.buttonText, 
        styles[`${variant}Text`], 
        disabled && styles.disabledText
    ];

    const getLoadingColor = () => {
        switch (variant) {
            case "primary":
            case "danger":
                return COLORS.WHITE;
            case "secondary":
            case "ghost":
                return COLORS.PRIMARY;
            default:
                return COLORS.WHITE;
        }
    };

    return (
        <TouchableOpacity 
            style={buttonStyle} 
            onPress={onPress} 
            disabled={disabled || loading} 
            activeOpacity={0.8}
        >
            {loading ? (
                <ActivityIndicator 
                    color={getLoadingColor()} 
                    size="small" 
                />
            ) : (
                <>
                    {icon && <>{icon}</>}
                    <Text style={textStyle}>{title}</Text>
                </>
            )}
        </TouchableOpacity>
    );
});

const styles = StyleSheet.create({
    primary: {
        backgroundColor: COLORS.PRIMARY,
        shadowColor: COLORS.PRIMARY,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    secondary: {
        backgroundColor: COLORS.WHITE,
        borderWidth: 1.5,
        borderColor: COLORS.PRIMARY,
        shadowColor: COLORS.PRIMARY,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
    },
    danger: {
        backgroundColor: COLORS.ERROR,
        shadowColor: COLORS.ERROR,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    ghost: {
        backgroundColor: "transparent",
        borderWidth: 0,
    },
    small: {
        paddingVertical: SPACING.P2,
        paddingHorizontal: SPACING.P3,
        minHeight: 36,
    },
    medium: {
        paddingVertical: SPACING.P3,
        paddingHorizontal: SPACING.P4,
        minHeight: 44,
    },
    large: {
        paddingVertical: SPACING.P4,
        paddingHorizontal: SPACING.P6,
        minHeight: 52,
    },
    
    disabled: {
        backgroundColor: COLORS.GRAY_300,
        borderColor: COLORS.GRAY_300,
        shadowOpacity: 0,
        elevation: 0,
    },
    
    primaryText: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE.TEXT_BASE,
        fontWeight: FONT_WEIGHT.MEDIUM,
        letterSpacing: DESIGN_TOKENS.LETTER_SPACING.TIGHT,
    },
    secondaryText: {
        color: COLORS.PRIMARY,
        fontSize: FONT_SIZE.TEXT_BASE,
        fontWeight: FONT_WEIGHT.MEDIUM,
        letterSpacing: DESIGN_TOKENS.LETTER_SPACING.TIGHT,
    },
    dangerText: {
        color: COLORS.WHITE,
        fontSize: FONT_SIZE.TEXT_BASE,
        fontWeight: FONT_WEIGHT.MEDIUM,
        letterSpacing: DESIGN_TOKENS.LETTER_SPACING.TIGHT,
    },
    ghostText: {
        color: COLORS.PRIMARY,
        fontSize: FONT_SIZE.TEXT_BASE,
        fontWeight: FONT_WEIGHT.MEDIUM,
        letterSpacing: DESIGN_TOKENS.LETTER_SPACING.TIGHT,
    },
    disabledText: {
        color: COLORS.TEXT_DISABLED,
        fontSize: FONT_SIZE.TEXT_BASE,
        fontWeight: FONT_WEIGHT.MEDIUM,
    },
});
