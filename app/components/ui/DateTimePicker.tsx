import DateTimePicker, { DateTimePickerEvent } from "@react-native-community/datetimepicker";
import React, { memo, useCallback } from "react";
import { Platform, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { COLORS, FONT_SIZE, FONT_WEIGHT, SPACING } from "@/constants/styles";
import { commonStyles } from "@/styles/common";

interface DateTimePickerProps {
    label: string;
    date: Date;
    time: Date;
    onDateChange: (date: Date) => void;
    onTimeChange: (time: Date) => void;
    showDatePicker: boolean;
    showTimePicker: boolean;
    onToggleDatePicker: () => void;
    onToggleTimePicker: () => void;
    error?: string;
    required?: boolean;
    formatDate: (date: Date) => string;
    formatTime: (time: Date) => string;
    formatDateTime: (date: Date, time: Date) => string;
}

export const DateTimePickerComponent: React.FC<DateTimePickerProps> = memo(({
    label,
    date,
    time,
    onDateChange,
    onTimeChange,
    showDatePicker,
    showTimePicker,
    onToggleDatePicker,
    onToggleTimePicker,
    error,
    required = false,
    formatDate,
    formatTime,
    formatDateTime,
}) => {
    const handleDateChange = useCallback((event: DateTimePickerEvent, selectedDate: Date | undefined) => {
        if (event.type === "set" && selectedDate) {
            onDateChange(selectedDate);
            if (Platform.OS === "android") {
                onToggleDatePicker();
            }
        } else {
            onToggleDatePicker();
        }
    }, [onDateChange, onToggleDatePicker]);

    const handleTimeChange = useCallback((event: DateTimePickerEvent, selectedTime: Date | undefined) => {
        if (event.type === "set" && selectedTime) {
            onTimeChange(selectedTime);
            if (Platform.OS === "android") {
                onToggleTimePicker();
            }
        } else {
            onToggleTimePicker();
        }
    }, [onTimeChange, onToggleTimePicker]);

    return (
        <View style={commonStyles.inputGroup}>
            <Text style={commonStyles.label}>
                {label}
                {required && <Text style={{ color: COLORS.ERROR, fontWeight: FONT_WEIGHT.BOLD }}> *</Text>}
            </Text>

            <View style={styles.dateTimeContainer}>
                <View style={styles.dateTimeColumn}>
                    <Text style={styles.subLabel}>Date</Text>
                    <Pressable onPress={onToggleDatePicker} style={styles.pressableInput}>
                        <TextInput 
                            style={[styles.dateTimeInput, error && commonStyles.inputError]} 
                            value={formatDate(date)} 
                            placeholder="Select date" 
                            placeholderTextColor={COLORS.TEXT_LIGHT}
                            editable={false} 
                        />
                    </Pressable>
                </View>

                <View style={styles.dateTimeColumn}>
                    <Text style={styles.subLabel}>Time</Text>
                    <Pressable onPress={onToggleTimePicker} style={styles.pressableInput}>
                        <TextInput 
                            style={[styles.dateTimeInput, error && commonStyles.inputError]} 
                            value={formatTime(time)} 
                            placeholder="Select time" 
                            placeholderTextColor={COLORS.TEXT_LIGHT}
                            editable={false} 
                        />
                    </Pressable>
                </View>
            </View>

            <Text style={styles.selectedDateTime}>Selected: {formatDateTime(date, time)}</Text>

            {error && <Text style={commonStyles.errorText}>{error}</Text>}

            {/* Date Picker Modal */}
            {showDatePicker && (
                <DateTimePicker 
                    mode="date" 
                    display={Platform.OS === "ios" ? "spinner" : "default"} 
                    value={date} 
                    onChange={handleDateChange} 
                    minimumDate={new Date()} 
                />
            )}

            {/* Time Picker Modal */}
            {showTimePicker && (
                <DateTimePicker 
                    mode="time" 
                    display={Platform.OS === "ios" ? "spinner" : "default"} 
                    value={time} 
                    onChange={handleTimeChange} 
                />
            )}
        </View>
    );
});

const styles = StyleSheet.create({
    subLabel: {
        fontSize: FONT_SIZE.TEXT_SM,
        fontWeight: FONT_WEIGHT.MEDIUM,
        marginBottom: SPACING.P1,
        color: COLORS.TEXT_SECONDARY,
    },
    dateTimeContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        gap: SPACING.P3,
    },
    dateTimeColumn: {
        flex: 1,
    },
    pressableInput: {
        borderRadius: 8,
    },
    dateTimeInput: {
        backgroundColor: COLORS.WHITE,
        borderWidth: 1,
        borderColor: COLORS.GRAY_300,
        borderRadius: 8,
        paddingVertical: SPACING.P3,
        paddingHorizontal: SPACING.P3,
        fontSize: FONT_SIZE.TEXT_BASE,
        textAlign: "center",
        color: COLORS.TEXT_PRIMARY,
    },
    selectedDateTime: {
        marginTop: SPACING.P2,
        fontSize: FONT_SIZE.TEXT_SM,
        color: COLORS.TEXT_SECONDARY,
        textAlign: "center",
        fontStyle: "italic",
        backgroundColor: COLORS.GRAY_50,
        paddingVertical: SPACING.P2,
        paddingHorizontal: SPACING.P3,
        borderRadius: 6,
    },
});
