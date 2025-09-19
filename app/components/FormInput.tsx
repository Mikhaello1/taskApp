import React from 'react';
import { Text, TextInput, View } from 'react-native';

import { COLORS } from '@/constants/styles';
import { commonStyles } from '@/styles/common';

interface FormInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  multiline?: boolean;
  numberOfLines?: number;
  returnKeyType?: 'next' | 'done' | 'default';
  error?: string;
  required?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  multiline = false,
  numberOfLines = 1,
  returnKeyType = 'next',
  error,
  required = false,
}) => {
  return (
    <View style={commonStyles.inputGroup}>
      <Text style={commonStyles.label}>
        {label}
        {required && <Text style={{ color: COLORS.ERROR }}> *</Text>}
      </Text>
      <TextInput
        style={[
          commonStyles.input,
          multiline && commonStyles.textArea,
          error && commonStyles.inputError,
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
        returnKeyType={returnKeyType}
      />
      {error && <Text style={commonStyles.errorText}>{error}</Text>}
    </View>
  );
};
