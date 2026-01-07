const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3001;
const TASKS_FILE = path.join(__dirname, "data", "tasks.json");

// Middleware
app.use(cors());
app.use(express.json());

// Ensure data directory and file exist
async function ensureDataFile() {
  try {
    await fs.access(TASKS_FILE);
  } catch (error) {
    // File doesn't exist, create it with empty array
    await fs.mkdir(path.dirname(TASKS_FILE), { recursive: true });
    await fs.writeFile(TASKS_FILE, "[]");
  }
}

// Read tasks from file
async function readTasks() {
  try {
    const data = await fs.readFile(TASKS_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading tasks:", error);
    return [];
  }
}

// Write tasks to file
async function writeTasks(tasks) {
  try {
    await fs.writeFile(TASKS_FILE, JSON.stringify(tasks, null, 2));
  } catch (error) {
    console.error("Error writing tasks:", error);
    throw error;
  }
}

// Routes
app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await readTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Failed to read tasks" });
  }
});

app.post("/api/tasks", async (req, res) => {
  try {
    const tasks = await readTasks();
    const newTask = { ...req.body, id: Date.now() };
    tasks.push(newTask);
    await writeTasks(tasks);
    res.json(newTask);
  } catch (error) {
    res.status(500).json({ error: "Failed to create task" });
  }
});

app.put("/api/tasks/:id", async (req, res) => {
  try {
    const tasks = await readTasks();
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) {
      return res.status(404).json({ error: "Task not found" });
    }

    tasks[taskIndex] = { ...tasks[taskIndex], ...req.body };
    await writeTasks(tasks);
    res.json(tasks[taskIndex]);
  } catch (error) {
    res.status(500).json({ error: "Failed to update task" });
  }
});

app.delete("/api/tasks/:id", async (req, res) => {
  try {
    const tasks = await readTasks();
    const taskId = parseInt(req.params.id);
    const filteredTasks = tasks.filter((task) => task.id !== taskId);

    if (filteredTasks.length === tasks.length) {
      return res.status(404).json({ error: "Task not found" });
    }

    await writeTasks(filteredTasks);
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete task" });
  }
});

// Initialize and start server
async function startServer() {
  await ensureDataFile();
  app.listen(PORT, () => {
    console.log(`Task API server running on http://localhost:${PORT}`);
  });
}

startServer();
