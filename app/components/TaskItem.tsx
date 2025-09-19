import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { STRINGS } from "@/constants/strings";
import { COLORS } from "@/constants/styles";
import { commonStyles } from "@/styles/common";
import { Task, TaskStatus } from "@/types";
import { getStatusColor } from "@/utils/statusColors";

interface TaskItemProps {
    item: Task;
    onUpdateStatus: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ item, onUpdateStatus, onDelete }) => {
    const router = useRouter();

    return (
        <TouchableOpacity style={commonStyles.listItem} onPress={() => router.push({ pathname: "/taskDetail", params: { task: JSON.stringify(item) } })}>
            {/* Task information section */}
            <View style={commonStyles.flex1}>
                <Text style={commonStyles.textTitle}>{item.title}</Text>
                <Text style={commonStyles.textSubtitle}>{new Date(item.dateTime).toLocaleString()}</Text>
                <View style={commonStyles.statusContainer}>
                    <View style={[commonStyles.statusIndicator, { backgroundColor: getStatusColor(item.status) }]} />
                    <Text style={commonStyles.textCaption}>{item.status}</Text>
                </View>
            </View>

            {/* Action buttons section */}
            <View style={[commonStyles.row, commonStyles.gapSm]}>
                {/* In Progress button */}
                <TouchableOpacity onPress={() => onUpdateStatus(item.id, STRINGS.STATUS.IN_PROGRESS)} disabled={item.status === STRINGS.STATUS.IN_PROGRESS}>
                    <Ionicons name="play-circle" size={28} color={item.status === STRINGS.STATUS.IN_PROGRESS ? COLORS.GRAY_DISABLED : COLORS.IN_PROGRESS} />
                </TouchableOpacity>

                {/* Complete button */}
                <TouchableOpacity onPress={() => onUpdateStatus(item.id, STRINGS.STATUS.COMPLETED)} disabled={item.status === STRINGS.STATUS.COMPLETED}>
                    <Ionicons name="checkmark-circle" size={28} color={item.status === STRINGS.STATUS.COMPLETED ? COLORS.GRAY_DISABLED : COLORS.COMPLETED} />
                </TouchableOpacity>

                {/* Cancel button */}
                <TouchableOpacity onPress={() => onUpdateStatus(item.id, STRINGS.STATUS.CANCELLED)} disabled={item.status === STRINGS.STATUS.CANCELLED}>
                    <Ionicons name="close-circle" size={28} color={item.status === STRINGS.STATUS.CANCELLED ? COLORS.GRAY_DISABLED : COLORS.CANCELLED} />
                </TouchableOpacity>

                {/* Delete button */}
                <TouchableOpacity onPress={() => onDelete(item.id)}>
                    <Ionicons name="trash" size={24} color={COLORS.ERROR} />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};
