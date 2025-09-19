import { STRINGS } from "@/constants/strings";
import { commonStyles } from "@/styles/common";
import { Task } from "@/types";
import { useFocusEffect } from "expo-router";
import React, { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTasks } from "../hooks/useTasks";
import { useTaskSorting } from "../hooks/useTaskSorting";
import { EmptyList } from "./components/EmptyList";
import { Header } from "./components/Header";
import { SortModal } from "./components/SortModal";
import { TaskItem } from "./components/TaskItem";

export default function TaskListScreen() {
    const [sortModalVisible, setSortModalVisible] = useState(false);
    
    const { tasks, loadTasks, updateTaskStatus, confirmDeleteTask } = useTasks();
    const { sortBy, setSortBy, sortedTasks } = useTaskSorting(tasks);

    // Load tasks when screen comes into focus
    useFocusEffect(
        useCallback(() => {
            loadTasks();
        }, [loadTasks])
    );

    const renderTaskItem = ({ item }: { item: Task }) => (
        <TaskItem 
            item={item} 
            onUpdateStatus={updateTaskStatus} 
            onDelete={confirmDeleteTask} 
        />
    );

    return (
        <SafeAreaView style={commonStyles.safeArea}>
            <Header 
                title={STRINGS.HEADER.TITLE} 
                onSortPress={() => setSortModalVisible(true)} 
            />

            <FlatList
                data={sortedTasks}
                renderItem={renderTaskItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={commonStyles.listContainer}
                ListEmptyComponent={
                    <EmptyList 
                        title={STRINGS.EMPTY_LIST.TITLE} 
                        subtitle={STRINGS.EMPTY_LIST.SUBTITLE} 
                    />
                }
            />

            <SortModal 
                visible={sortModalVisible} 
                onClose={() => setSortModalVisible(false)} 
                sortBy={sortBy} 
                onSortChange={setSortBy} 
            />
        </SafeAreaView>
    );
}
