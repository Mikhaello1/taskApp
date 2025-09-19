import React, { memo, useCallback, useState } from "react";
import { Text, TextInput, View } from "react-native";

import { COLORS, FONT_WEIGHT, SPACING } from "@/constants/styles";
import { commonStyles } from "@/styles/common";

interface FormInputProps {
    label: string;
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    multiline?: boolean;
    numberOfLines?: number;
    returnKeyType?: "next" | "done" | "default";
    error?: string;
    required?: boolean;
    secureTextEntry?: boolean;
    keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
    autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

export const FormInput: React.FC<FormInputProps> = memo(({
    label,
    value,
    onChangeText,
    placeholder,
    multiline = false,
    numberOfLines = 1,
    returnKeyType = "next",
    error,
    required = false,
    secureTextEntry = false,
    keyboardType = "default",
    autoCapitalize = "sentences",
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    const inputStyle = [
        commonStyles.input,
        multiline && commonStyles.textArea,
        isFocused && commonStyles.inputFocused,
        error && commonStyles.inputError,
    ];

    return (
        <View style={commonStyles.inputGroup}>
            <Text style={commonStyles.label}>
                {label}
                {required && <Text style={{ color: COLORS.ERROR, fontWeight: FONT_WEIGHT.BOLD }}> *</Text>}
            </Text>
            <TextInput
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={COLORS.TEXT_LIGHT}
                multiline={multiline}
                numberOfLines={numberOfLines}
                returnKeyType={returnKeyType}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                autoCapitalize={autoCapitalize}
                onFocus={handleFocus}
                onBlur={handleBlur}
                selectionColor={COLORS.PRIMARY}
            />
            {error && (
                <View style={{ marginTop: SPACING.P1 }}>
                    <Text style={commonStyles.errorText}>{error}</Text>
                </View>
            )}
        </View>
    );
});
