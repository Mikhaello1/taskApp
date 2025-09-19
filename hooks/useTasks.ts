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
      } else {
        setTasks([]); 
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

      const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);
      const currentTasks = storedTasks ? JSON.parse(storedTasks) : [];
      
      const updatedTasks = [...currentTasks, newTask];
      await saveTasks(updatedTasks);
      return true;
    } catch (error) {
      Alert.alert(STRINGS.COMMON.ERROR, STRINGS.TASK_FORM.SAVE_ERROR);
      return false;
    }
  }, [saveTasks]); 

  const updateTaskStatus = useCallback(async (taskId: string, newStatus: TaskStatus) => {
    try {
      const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);
      const currentTasks = storedTasks ? JSON.parse(storedTasks) : [];
      
      const updatedTasks = currentTasks.map((task: Task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      );
      await saveTasks(updatedTasks);
    } catch (error) {
      Alert.alert(STRINGS.COMMON.ERROR, STRINGS.ERRORS.UPDATE_STATUS);
    }
  }, [saveTasks]);

  const deleteTask = useCallback(async (taskId: string) => {
    try {
      const storedTasks = await AsyncStorage.getItem(STORAGE_KEY);
      const currentTasks = storedTasks ? JSON.parse(storedTasks) : [];
      
      const updatedTasks = currentTasks.filter((task: Task) => task.id !== taskId);
      await saveTasks(updatedTasks);
    } catch (error) {
      Alert.alert(STRINGS.COMMON.ERROR, STRINGS.ERRORS.DELETE_TASK);
    }
  }, [saveTasks]); 

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