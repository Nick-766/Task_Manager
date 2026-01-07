import React, { useState } from 'react';
import './TaskBoard.css';
import TaskColumn from './TaskColumn';
import TaskModal from './TaskModal';

function TaskBoard({ tasks, addTask, updateTask, deleteTask }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const handleAddTask = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const handleEditTask = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleSaveTask = (task) => {
    if (editingTask) {
      updateTask(editingTask.id, task);
    } else {
      addTask(task);
    }
    setIsModalOpen(false);
    setEditingTask(null);
  };

  const todoTasks = tasks.filter(task => task.status === 'todo');
  const inProgressTasks = tasks.filter(task => task.status === 'inprogress');
  const doneTasks = tasks.filter(task => task.status === 'done');

  return (
    <div className="task-board">
      <div className="board-header">
        <h1>Tasks</h1>
        <div className="board-actions">
          <button className="icon-btn">↶</button>
          <button className="icon-btn">↷</button>
          <button className="icon-btn">👥</button>
          <button className="icon-btn">☰</button>
          <button className="new-task-btn" onClick={handleAddTask}>
            + New task
          </button>
        </div>
      </div>

      <div className="columns">
        <TaskColumn 
          title="To do" 
          tasks={todoTasks}
          onEdit={handleEditTask}
          onDelete={deleteTask}
          
        />
        <TaskColumn 
          title="In progress" 
          tasks={inProgressTasks}
          onEdit={handleEditTask}
          onDelete={deleteTask}
        />
        <TaskColumn 
          title="Done" 
          tasks={doneTasks}
          onEdit={handleEditTask}
          onDelete={deleteTask}
        />
      </div>

      {isModalOpen && (
        <TaskModal
          task={editingTask}
          onSave={handleSaveTask}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}

export default TaskBoard;
