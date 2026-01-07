# Task Manager with Persistent Storage

A React-based task management application with persistent data storage using JSON files and a Node.js backend.

## Features

- ✅ **CRUD Operations**: Create, Read, Update, and Delete tasks
- 📊 **Kanban Board**: Three columns (To do, In progress, Done)
- 💾 **Persistent Storage**: Data stored in JSON files on the server
- 🔄 **Fallback Support**: Falls back to localStorage if server is unavailable
- 🎨 **Modern UI**: Clean design matching the mockup
- 📱 **Responsive**: Works on different screen sizes
- 🚀 **Real-time Updates**: Changes persist across browser refreshes

## Installation & Setup

1. Navigate to the project directory:

```bash
cd task-manager
```

2. Install dependencies:

```bash
npm install
```

3. Start both server and client (recommended):

```bash
npm run dev
```

This will start:

- Backend API server on http://localhost:3001
- React frontend on http://localhost:3000

## Alternative Running Methods

### Run server and client separately:

Terminal 1 (Backend):

```bash
npm run server
```

Terminal 2 (Frontend):

```bash
npm start
```

## Usage

- **Add Task**: Click the "+ New task" button in the top right
- **Edit Task**: Click the pencil icon (✎) on any task card
- **Delete Task**: Click the trash icon (🗑) on any task card
- **View Tasks**: Tasks are organized in three columns based on their status

## Data Storage

- Tasks are stored in `data/tasks.json`
- The file is automatically created when the server starts
- Data persists between application restarts and browser refreshes
- Fallback to localStorage if server is unavailable

## API Endpoints

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Create a new task
- `PUT /api/tasks/:id` - Update a task
- `DELETE /api/tasks/:id` - Delete a task

## Project Structure

```
task-manager/
├── data/
│   └── tasks.json          # Persistent task storage
├── src/
│   ├── components/         # React components
│   ├── services/
│   │   └── taskService.js  # API service layer
│   ├── App.js
│   ├── App.css
│   └── index.js
├── server.js               # Express API server
└── package.json
```

## Technologies Used

- **Frontend**: React 18, JavaScript (ES6+), CSS3
- **Backend**: Node.js, Express.js
- **Storage**: JSON files, localStorage (fallback)
- **Development**: Concurrently for running multiple processes

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.
