import { View } from "react-native";
import { Task } from "../types/task.types";
import { TaskItem } from "./TaskItem";

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: string) => void;
};

export function TaskList({ tasks, onToggle }: TaskListProps) {
  return (
    <View>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onToggle={onToggle} />
      ))}
    </View>
  );
}
