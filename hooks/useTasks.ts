import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useState } from 'react';
import { Alert } from 'react-native';

import { STRINGS } from '@/constants/strings';
import { Task, TaskStatus } from '@/types';

const STORAGE_KEY = 'fieldTasks';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);

  const loadTasks = useCallback(async () => {
    try {
      setLoading(true);
      const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      Alert.alert(STRINGS.COMMON.ERROR, STRINGS.ERRORS.LOAD_TASKS);
    } finally {
      setLoading(false);
    }
  }, []);

  const saveTasks = useCallback(async (updatedTasks: Task[]) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
    } catch (error) {
      Alert.alert(STRINGS.COMMON.ERROR, 'Failed to save tasks');
    }
  }, []);

  const addTask = useCallback(async (newTask: Task) => {
    try {
      const updatedTasks = [...tasks, newTask];
      await saveTasks(updatedTasks);
      return true;
    } catch (error) {
      Alert.alert(STRINGS.COMMON.ERROR, STRINGS.TASK_FORM.SAVE_ERROR);
      return false;
    }
  }, [tasks, saveTasks]);

  const updateTaskStatus = useCallback(async (taskId: string, newStatus: TaskStatus) => {
    try {
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      );
      await saveTasks(updatedTasks);
    } catch (error) {
      Alert.alert(STRINGS.COMMON.ERROR, STRINGS.ERRORS.UPDATE_STATUS);
    }
  }, [tasks, saveTasks]);

  const deleteTask = useCallback(async (taskId: string) => {
    try {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      await saveTasks(updatedTasks);
    } catch (error) {
      Alert.alert(STRINGS.COMMON.ERROR, STRINGS.ERRORS.DELETE_TASK);
    }
  }, [tasks, saveTasks]);

  const confirmDeleteTask = useCallback((taskId: string) => {
    Alert.alert(
      STRINGS.ALERT.DELETE_TITLE,
      STRINGS.ALERT.DELETE_MESSAGE,
      [
        { text: STRINGS.ALERT.CANCEL, style: 'cancel' },
        {
          text: STRINGS.ALERT.DELETE,
          style: 'destructive',
          onPress: () => deleteTask(taskId),
        },
      ]
    );
  }, [deleteTask]);

  return {
    tasks,
    loading,
    loadTasks,
    addTask,
    updateTaskStatus,
    deleteTask,
    confirmDeleteTask,
  };
};
