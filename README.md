# Task Manager - React Application

A simple and elegant Task Manager application built with React and JavaScript that matches the provided mockup design.

## Features

- ✅ **CRUD Operations**: Create, Read, Update, and Delete tasks
- 📊 **Kanban Board**: Three columns (To do, In progress, Done)
- 💾 **Local Storage**: Data persists in browser's localStorage
- 🎨 **Modern UI**: Clean design matching the mockup
- 📱 **Responsive**: Works on different screen sizes

## Installation & Setup

1. Navigate to the project directory:
```bash
cd task-manager
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit: `http://localhost:3000`

## Usage

- **Add Task**: Click the "+ New task" button in the top right
- **Edit Task**: Click the pencil icon (✎) on any task card
- **Delete Task**: Click the trash icon (🗑) on any task card
- **View Tasks**: Tasks are organized in three columns based on their status

## Project Structure

```
task-manager/
├── src/
│   ├── components/
│   │   ├── Sidebar.js
│   │   ├── Sidebar.css
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── TaskBoard.js
│   │   ├── TaskBoard.css
│   │   ├── TaskColumn.js
│   │   ├── TaskColumn.css
│   │   ├── TaskCard.js
│   │   ├── TaskCard.css
│   │   ├── TaskModal.js
│   │   └── TaskModal.css
│   ├── App.js
│   ├── App.css
│   └── index.js
└── package.json
```

## Technologies Used

- React 18
- JavaScript (ES6+)
- CSS3
- Local Storage API

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.
