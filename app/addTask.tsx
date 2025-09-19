import { commonStyles } from "@/styles/common";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, Keyboard, ScrollView, TouchableWithoutFeedback, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { STRINGS } from "../constants/strings";
import { useTaskForm } from "../hooks/useTaskForm";
import { useTasks } from "../hooks/useTasks";
import { Button } from "./components/Button";
import { DateTimePickerComponent } from "./components/DateTimePicker";
import { FormInput } from "./components/FormInput";

export default function AddTaskScreen() {
    const router = useRouter();
    const { addTask } = useTasks();
    const {
        formData: { title, description, address, date, time },
        errors,
        showDatePicker,
        showTimePicker,
        setTitle,
        setDescription,
        setAddress,
        setDate,
        setTime,
        setShowDatePicker,
        setShowTimePicker,
        validateForm,
        getTaskData,
        formatDate,
        formatTime,
        formatDateTime,
    } = useTaskForm();

    const handleSaveTask = async () => {
        if (!validateForm()) return;

        const newTask = getTaskData();
        const success = await addTask(newTask);

        if (success) {
            router.back();
            Alert.alert(STRINGS.COMMON.SUCCESS, STRINGS.TASK_FORM.SAVE_SUCCESS);
        }
    };

    const toggleDatePicker = () => {
        setShowDatePicker((prev) => !prev);
        setShowTimePicker(false);
    };

    const toggleTimePicker = () => {
        setShowTimePicker((prev) => !prev);
        setShowDatePicker(false);
    };

    return (
        <SafeAreaView style={commonStyles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView style={commonStyles.container} keyboardShouldPersistTaps="handled">
                    <View style={commonStyles.form}>
                        <FormInput
                            label={STRINGS.TASK_FORM.TITLE}
                            value={title}
                            onChangeText={setTitle}
                            placeholder="Enter task title"
                            error={errors.title}
                            required
                        />

                        <FormInput
                            label={STRINGS.TASK_FORM.DESCRIPTION}
                            value={description}
                            onChangeText={setDescription}
                            placeholder="Enter task description"
                            multiline
                            numberOfLines={4}
                            error={errors.description}
                            required
                        />

                        <FormInput
                            label={STRINGS.TASK_FORM.ADDRESS}
                            value={address}
                            onChangeText={setAddress}
                            placeholder="Enter address"
                            error={errors.address}
                            required
                        />

                        <DateTimePickerComponent
                            label={STRINGS.TASK_FORM.DATE_TIME}
                            date={date}
                            time={time}
                            onDateChange={setDate}
                            onTimeChange={setTime}
                            showDatePicker={showDatePicker}
                            showTimePicker={showTimePicker}
                            onToggleDatePicker={toggleDatePicker}
                            onToggleTimePicker={toggleTimePicker}
                            error={errors.dateTime}
                            required
                            formatDate={formatDate}
                            formatTime={formatTime}
                            formatDateTime={formatDateTime}
                        />

                        <Button
                            title={STRINGS.COMMON.SAVE}
                            onPress={handleSaveTask}
                            variant="primary"
                            size="large"
                            style={{ marginTop: 20 }}
                        />
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </SafeAreaView>
    );
}

