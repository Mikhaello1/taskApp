import { useState } from "react";

import { STRINGS } from "@/constants/strings";
import { Task } from "@/types";

interface UseTaskFormReturn {
    formData: {
        title: string;
        description: string;
        address: string;
        date: Date;
        time: Date;
    };
    errors: Record<string, string>;
    showDatePicker: boolean;
    showTimePicker: boolean;
    setTitle: (title: string) => void;
    setDescription: (description: string) => void;
    setAddress: (address: string) => void;
    setDate: (date: Date) => void;
    setTime: (time: Date) => void;
    setShowDatePicker: (show: boolean | ((prev: boolean) => boolean)) => void;
    setShowTimePicker: (show: boolean | ((prev: boolean) => boolean)) => void;
    validateForm: () => boolean;
    getTaskData: () => Task;
    formatDate: (date: Date) => string;
    formatTime: (time: Date) => string;
    formatDateTime: (date: Date, time: Date) => string;
    resetForm: () => void;
}

export const useTaskForm = (): UseTaskFormReturn => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [date, setDate] = useState<Date>(new Date());
    const [time, setTime] = useState<Date>(new Date());
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
    const [showTimePicker, setShowTimePicker] = useState<boolean>(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validateForm = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!title.trim()) newErrors.title = STRINGS.TASK_FORM.TITLE_REQUIRED;
        if (!description.trim()) newErrors.description = STRINGS.TASK_FORM.DESCRIPTION_REQUIRED;
        if (!address.trim()) newErrors.address = STRINGS.TASK_FORM.ADDRESS_REQUIRED;

        // Validate date and time combination
        const combinedDateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes());

        if (!combinedDateTime || combinedDateTime < new Date()) {
            newErrors.dateTime = STRINGS.TASK_FORM.DATE_TIME_REQUIRED;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const getTaskData = (): Task => {
        const combinedDateTime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes());

        return {
            id: Date.now().toString(),
            title: title.trim(),
            description: description.trim(),
            address: address.trim(),
            dateTime: combinedDateTime.toISOString(),
            status: STRINGS.STATUS.PENDING,
            createdAt: new Date().toISOString(),
        };
    };

    const formatDate = (date: Date): string => date.toLocaleDateString();
    const formatTime = (time: Date): string => time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const formatDateTime = (date: Date, time: Date): string => `${formatDate(date)} ${formatTime(time)}`;

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setAddress("");
        setDate(new Date());
        setTime(new Date());
        setErrors({});
        setShowDatePicker(false);
        setShowTimePicker(false);
    };

    return {
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
        resetForm,
    };
};
