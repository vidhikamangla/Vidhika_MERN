# Task Manager App

## Project Overview

TaskManager is a simple task management web application built using the **MERN stack** (MongoDB, Express.js, React, Node.js). It provides basic **CRUD (Create, Read, Update, Delete)** functionality to manage tasks. Users can add, update, view, and delete tasks with a simple and intuitive UI.

## Features

- **Create** tasks with a title and description.
- **View** a list of all tasks.
- **Update** a task’s title and description.
- **Delete** tasks individually.
- User-friendly UI with responsive design.

---

## Technologies Used

- **MongoDB** for database storage
- **Express.js** for building the backend RESTful APIs
- **React.js** for building the frontend user interface
- **Node.js** for the backend server
- **CSS** for basic styling

---

## Installation Instructions

### Prerequisites

Make sure you have the following installed on your system:

- **Node.js**
- **MongoDB** (or use MongoDB Atlas for cloud-hosted database)
- **npm** (comes with Node.js)

---

### Step-by-Step Setup

#### 1. Clone the repository

```bash
git clone https://github.com/vidhikamangla/Vidhika_MERN.git
cd Vidhika_MERN
```

#### 2. Backend Setup (Express & MongoDB)

1. Navigate to the **backend** directory:

   ```bash
   cd backend
   ```

2. Install backend dependencies:

   ```bash
   npm install
   ```

3. Set up MongoDB connection string:
   - If you're using **MongoDB Compass**, copy the connection string from your Compass instance.
   - If using **MongoDB Atlas**, create a cluster and get the connection string.

4. Start the backend server:

   ```bash
   npm start
   ```

   The backend should now be running at `http://localhost:5000`.

---

#### 3. Frontend Setup (React)

1. Navigate to the **frontend** directory:

   ```bash
   cd ../frontend
   ```

2. Install frontend dependencies:

   ```bash
   npm install
   ```

3. Start the frontend development server:

   ```bash
   npm run dev
   ```

   The frontend should now be running at `http://localhost:5173`.

---

## How to Use

Visit http://localhost:5173. Now you can add, update, and delete tasks and mark them as completed/incomplete.

### Backend API Endpoints

The backend exposes the following API endpoints:

- **GET /tasks** - Fetch all tasks
- **POST /tasks** - Create a new task
- **PUT /tasks/:id** - Update an existing task by ID
- **DELETE /tasks/:id** - Delete a task by ID

### Frontend

The frontend allows users to:

- **Add** a new task with a title and description.
- **View** the list of tasks.
- **Edit** the title and description of a task.
- **Delete** tasks from the list.

---

## Project Structure

```
task-manager-mern/
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ └── index.js
├── frontend/
│ ├── src/
│ └── public/
├── README.md
├── package.json (for root dependencies)
└── .gitignore
```

---

## Troubleshooting

- If you encounter any issues with the MongoDB connection, make sure your connection string is correctly set up in the backend.
- If the frontend doesn’t load correctly, ensure the development server is running on the correct port (`5173`).

---
## Output Images

Main page
![image](https://github.com/user-attachments/assets/42004bed-3464-40aa-9a9f-6973d148b0d2)

1. Adding new tasks:
![image](https://github.com/user-attachments/assets/06546221-952d-4378-aa54-bd9819c8a144)

Task Added Successfully:
![image](https://github.com/user-attachments/assets/d09e5dc4-0c61-4cf5-b42c-75929d3f16fb)

2. Editing a task:

4. 
5. Deleting a task:




