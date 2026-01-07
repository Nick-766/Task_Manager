const API_BASE_URL = "http://localhost:3001/api";

class TaskService {
  async getAllTasks() {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks`);
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching tasks:", error);
      // Fallback to localStorage if server is not available
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    }
  }

  async createTask(task) {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      });

      if (!response.ok) {
        throw new Error("Failed to create task");
      }

      return await response.json();
    } catch (error) {
      console.error("Error creating task:", error);
      // Fallback to localStorage
      const newTask = { ...task, id: Date.now() };
      const savedTasks = localStorage.getItem("tasks");
      const tasks = savedTasks ? JSON.parse(savedTasks) : [];
      tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      return newTask;
    }
  }

  async updateTask(id, updatedTask) {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      if (!response.ok) {
        throw new Error("Failed to update task");
      }

      return await response.json();
    } catch (error) {
      console.error("Error updating task:", error);
      // Fallback to localStorage
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        const updatedTasks = tasks.map((task) =>
          task.id === id ? { ...task, ...updatedTask } : task
        );
        localStorage.setItem("tasks", JSON.stringify(updatedTasks));
        return updatedTasks.find((task) => task.id === id);
      }
      throw error;
    }
  }

  async deleteTask(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/tasks/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      return await response.json();
    } catch (error) {
      console.error("Error deleting task:", error);
      // Fallback to localStorage
      const savedTasks = localStorage.getItem("tasks");
      if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        const filteredTasks = tasks.filter((task) => task.id !== id);
        localStorage.setItem("tasks", JSON.stringify(filteredTasks));
        return { message: "Task deleted successfully" };
      }
      throw error;
    }
  }
}

export default new TaskService();
