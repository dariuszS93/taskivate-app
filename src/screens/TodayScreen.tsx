import { TaskList } from "@/features/tasks/components/TaskList";
import { initialTasks } from "@/features/tasks/data/initialTasks";
import { Task } from "@/features/tasks/types/task.types";
import {
    countCompletedTasks,
    toggleTaskCompletion,
} from "@/features/tasks/utils/task.utils";
import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function TodayScreen() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleToggleTask = (id: string) => {
    setTasks((currentTask) => toggleTaskCompletion(currentTask, id));
  };

  const completedCount = countCompletedTasks(tasks);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.appName}>Taskivate</Text>
          <Text style={styles.title}>Today </Text>
          <Text style={styles.subtitle}>
            {completedCount} of {tasks.length} tasks completed
          </Text>
        </View>

        <View style={styles.taskList}>
          <TaskList tasks={tasks} onToggle={handleToggleTask} />
        </View>
      </ScrollView>

      <Pressable style={styles.addButton}>
        <Text style={styles.addButtonText}>+ Add task</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FC",
  },
  content: {
    paddingBottom: 120,
  },
  header: {
    paddingTop: 32,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  appName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#6366F1",
    marginBottom: 24,
  },
  title: {
    fontSize: 34,
    fontWeight: "800",
    color: "#111827",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B7280",
    marginTop: 8,
  },
  taskList: {
    paddingHorizontal: 24,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
  },
  addButton: {
    position: "absolute",
    bottom: 40,
    left: 24,
    right: 24,
    backgroundColor: "#6366F1",
    padding: 18,
    borderRadius: 16,
    alignItems: "center",
  },
  addButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
