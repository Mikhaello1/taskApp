import { useFocusEffect } from "expo-router";
import React, { memo, useCallback, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { EmptyList } from "@/app/components/EmptyList";
import { Header } from "@/app/components/Header";
import { SortModal } from "@/app/components/SortModal";
import { TaskItem } from "@/app/components/TaskItem";
import { STRINGS } from "@/constants/strings";
import { useTasks } from "@/hooks/useTasks";
import { useTaskSorting } from "@/hooks/useTaskSorting";
import { commonStyles } from "@/styles/common";
import { Task } from "@/types";

const TaskListScreen = memo(() => {
    const [sortModalVisible, setSortModalVisible] = useState(false);

    const { tasks, loadTasks, updateTaskStatus, confirmDeleteTask } = useTasks();
    const { sortBy, setSortBy, sortedTasks } = useTaskSorting(tasks);

    // Load tasks when screen comes into focus
    useFocusEffect(
        useCallback(() => {
            loadTasks();
        }, [loadTasks])
    );

    const handleSortPress = useCallback(() => {
        setSortModalVisible(true);
    }, []);

    const handleSortClose = useCallback(() => {
        setSortModalVisible(false);
    }, []);

    const renderTaskItem = useCallback(({ item }: { item: Task }) => (
        <TaskItem 
            item={item} 
            onUpdateStatus={updateTaskStatus} 
            onDelete={confirmDeleteTask} 
        />
    ), [updateTaskStatus, confirmDeleteTask]);

    const keyExtractor = useCallback((item: Task) => item.id, []);

    const ListEmptyComponent = useCallback(() => (
        <EmptyList 
            title={STRINGS.EMPTY_LIST.TITLE} 
            subtitle={STRINGS.EMPTY_LIST.SUBTITLE} 
        />
    ), []);

    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <Header 
                title={STRINGS.HEADER.TITLE} 
                onSortPress={handleSortPress} 
            />

            <FlatList
                data={sortedTasks}
                renderItem={renderTaskItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={commonStyles.listContainer}
                ListEmptyComponent={ListEmptyComponent}
                showsVerticalScrollIndicator={false}
            />

            <SortModal 
                visible={sortModalVisible} 
                onClose={handleSortClose} 
                sortBy={sortBy} 
                onSortChange={setSortBy} 
            />
        </SafeAreaView>
    );
});

TaskListScreen.displayName = 'TaskListScreen';

export default TaskListScreen;
