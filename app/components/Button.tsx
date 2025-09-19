import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';

import { COLORS } from '@/constants/styles';
import { commonStyles } from '@/styles/common';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
}) => {
  const buttonStyle = [
    commonStyles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    style,
  ];

  const textStyle = [
    commonStyles.buttonText,
    styles[`${variant}Text`],
    disabled && styles.disabledText,
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.7}
    >
      {loading ? (
        <ActivityIndicator color={variant === 'primary' ? COLORS.WHITE : COLORS.PRIMARY} />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primary: {
    backgroundColor: COLORS.PRIMARY,
  },
  secondary: {
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
  },
  danger: {
    backgroundColor: COLORS.ERROR,
  },
  small: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  medium: {
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  large: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  disabled: {
    backgroundColor: COLORS.GRAY_DISABLED,
    borderColor: COLORS.GRAY_DISABLED,
  },
  primaryText: {
    color: COLORS.WHITE,
  },
  secondaryText: {
    color: COLORS.PRIMARY,
  },
  dangerText: {
    color: COLORS.WHITE,
  },
  disabledText: {
    color: COLORS.TEXT_LIGHT,
  },
});
