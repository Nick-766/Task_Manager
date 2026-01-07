import React, { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import TaskBoard from "./components/TaskBoard";
import Header from "./components/Header";
import taskService from "./services/taskService";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const loadedTasks = await taskService.getAllTasks();
      setTasks(loadedTasks);
      setError(null);
    } catch (err) {
      setError("Failed to load tasks");
      console.error("Error loading tasks:", err);
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (task) => {
    try {
      const newTask = await taskService.createTask(task);
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setError(null);
    } catch (err) {
      setError("Failed to add task");
      console.error("Error adding task:", err);
    }
  };

  const updateTask = async (id, updatedTask) => {
    try {
      const updated = await taskService.updateTask(id, updatedTask);
      setTasks((prevTasks) =>
        prevTasks.map((task) => (task.id === id ? updated : task))
      );
      setError(null);
    } catch (err) {
      setError("Failed to update task");
      console.error("Error updating task:", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await taskService.deleteTask(id);
      setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
      setError(null);
    } catch (err) {
      setError("Failed to delete task");
      console.error("Error deleting task:", err);
    }
  };

  if (loading) {
    return (
      <div className="app">
        <div className="loading">Loading tasks...</div>
      </div>
    );
  }

  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        {error && (
          <div className="error-banner">
            {error}
            <button onClick={() => setError(null)}>×</button>
          </div>
        )}
        <TaskBoard
          tasks={tasks}
          addTask={addTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
