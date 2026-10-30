import { Task } from "../types/task.types";

export function toggleTaskCompletion(tasks: Task[], taskId: string): Task[] {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task,
  );
}

export function countCompletedTasks(tasks: Task[]): number {
  return tasks.filter((task) => task.completed).length;
}
