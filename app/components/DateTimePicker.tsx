import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import React from 'react';
import { Platform, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import { COLORS } from '@/constants/styles';
import { commonStyles } from '@/styles/common';

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

export const DateTimePickerComponent: React.FC<DateTimePickerProps> = ({
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
  const handleDateChange = (event: DateTimePickerEvent, selectedDate: Date | undefined) => {
    if (event.type === 'set' && selectedDate) {
      onDateChange(selectedDate);
      if (Platform.OS === 'android') {
        onToggleDatePicker();
      }
    } else {
      onToggleDatePicker();
    }
  };

  const handleTimeChange = (event: DateTimePickerEvent, selectedTime: Date | undefined) => {
    if (event.type === 'set' && selectedTime) {
      onTimeChange(selectedTime);
      if (Platform.OS === 'android') {
        onToggleTimePicker();
      }
    } else {
      onToggleTimePicker();
    }
  };

  return (
    <View style={commonStyles.inputGroup}>
      <Text style={commonStyles.label}>
        {label}
        {required && <Text style={{ color: COLORS.ERROR }}> *</Text>}
      </Text>

      <View style={styles.dateTimeContainer}>
        <View style={styles.dateTimeColumn}>
          <Text style={styles.subLabel}>Date</Text>
          <Pressable onPress={onToggleDatePicker}>
            <TextInput
              style={[styles.dateTimeInput, error && commonStyles.inputError]}
              value={formatDate(date)}
              placeholder="Select date"
              editable={false}
            />
          </Pressable>
        </View>

        <View style={styles.dateTimeColumn}>
          <Text style={styles.subLabel}>Time</Text>
          <Pressable onPress={onToggleTimePicker}>
            <TextInput
              style={[styles.dateTimeInput, error && commonStyles.inputError]}
              value={formatTime(time)}
              placeholder="Select time"
              editable={false}
            />
          </Pressable>
        </View>
      </View>

      <Text style={styles.selectedDateTime}>
        Selected: {formatDateTime(date, time)}
      </Text>

      {error && <Text style={commonStyles.errorText}>{error}</Text>}

      {/* Date Picker Modal */}
      {showDatePicker && (
        <DateTimePicker
          mode="date"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          value={date}
          onChange={handleDateChange}
          minimumDate={new Date()}
        />
      )}

      {/* Time Picker Modal */}
      {showTimePicker && (
        <DateTimePicker
          mode="time"
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          value={time}
          onChange={handleTimeChange}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  subLabel: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
    color: COLORS.TEXT_SECONDARY,
  },
  dateTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  dateTimeColumn: {
    flex: 1,
  },
  dateTimeInput: {
    backgroundColor: COLORS.WHITE,
    borderWidth: 1,
    borderColor: COLORS.GRAY_MEDIUM,
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    textAlign: 'center',
  },
  selectedDateTime: {
    marginTop: 8,
    fontSize: 14,
    color: COLORS.TEXT_SECONDARY,
    textAlign: 'center',
    fontStyle: 'italic',
  },
});
