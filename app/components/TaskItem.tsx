import { STRINGS } from '@/constants/strings';
import { Task, TaskStatus } from '@/types';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getStatusColor } from '../utils/statusColors';
import { commonStyles } from '@/styles/common';

interface TaskItemProps {
  item: Task;
  onUpdateStatus: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({ item, onUpdateStatus, onDelete }) => {
  const router = useRouter();

  return (
    <TouchableOpacity 
      style={commonStyles.listItem}
      onPress={() => router.push({ pathname: '/taskDetail', params: { task: JSON.stringify(item) } })}
    >
      {/* Task information section */}
      <View style={commonStyles.flex1}>
        <Text style={commonStyles.textTitle}>{item.title}</Text>
        <Text style={commonStyles.textSubtitle}>
          {new Date(item.dateTime).toLocaleString()}
        </Text>
        <View style={commonStyles.statusContainer}>
          <View 
            style={[
              commonStyles.statusIndicator, 
              { backgroundColor: getStatusColor(item.status) }
            ]} 
          />
          <Text style={commonStyles.textCaption}>{item.status}</Text>
        </View>
      </View>
      
      {/* Action buttons section */}
      <View style={[commonStyles.row, commonStyles.gapMd]}>
        {/* Start/In Progress button */}
        <TouchableOpacity 
          onPress={() => onUpdateStatus(item.id, STRINGS.STATUS.IN_PROGRESS)}
          disabled={item.status === STRINGS.STATUS.IN_PROGRESS}
        >
          <Ionicons 
            name="play-circle" 
            size={24} 
            color={item.status === STRINGS.STATUS.IN_PROGRESS ? '#CCC' : '#1E90FF'} 
          />
        </TouchableOpacity>
        
        {/* Complete button */}
        <TouchableOpacity 
          onPress={() => onUpdateStatus(item.id, STRINGS.STATUS.COMPLETED)}
          disabled={item.status === STRINGS.STATUS.COMPLETED}
        >
          <Ionicons 
            name="checkmark-circle" 
            size={24} 
            color={item.status === STRINGS.STATUS.COMPLETED ? '#CCC' : '#32CD32'} 
          />
        </TouchableOpacity>
        
        {/* Cancel button */}
        <TouchableOpacity 
          onPress={() => onUpdateStatus(item.id, STRINGS.STATUS.CANCELLED)}
          disabled={item.status === STRINGS.STATUS.CANCELLED}
        >
          <Ionicons 
            name="close-circle" 
            size={24} 
            color={item.status === STRINGS.STATUS.CANCELLED ? '#CCC' : '#FF4500'} 
          />
        </TouchableOpacity>
        
        {/* Delete button */}
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={24} color="#FF4500" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};
