import instance from "@/services/axios";
import { useEffect, useState } from "react";

export function useTasks() {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  async function fetchTasks() {
    const response = await instance.get("/task");

    setTasks(response.data);
  }

  return { tasks, fetchTasks };
}
