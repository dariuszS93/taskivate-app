import { Pressable, StyleSheet, Text, View } from "react-native";
import { Task } from "../types/task.types";

type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
};

export function TaskItem({ task, onToggle }: TaskItemProps) {
  return (
    <Pressable style={styles.container} onPress={() => onToggle(task.id)}>
      <View
        style={[styles.checkbox, task.completed && styles.checkboxCompleted]}
      >
        {task.completed && <Text style={styles.checkmark}>✓</Text>}
      </View>
      <Text style={[styles.taskTitle, task.completed && styles.taskCompleted]}>
        {task.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "#D1D5DB",
    marginRight: 14,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  checkboxCompleted: {
    backgroundColor: "#6366F1",
    borderColor: "#6366F1",
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
  taskTitle: {
    fontSize: 16,
    color: "#111827",
    flex: 1,
  },
  taskCompleted: {
    textDecorationLine: "line-through",
    color: "#9CA3AF",
  },
});
