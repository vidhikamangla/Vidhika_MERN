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
![image](https://github.com/user-attachments/assets/24b5b5bc-924a-443f-9370-50df1be9db4a)

1. Adding new tasks:
   
![image](https://github.com/user-attachments/assets/3649c589-5518-4704-8c81-05a09f563813)

-- Task Added Successfully:

-- ![image](https://github.com/user-attachments/assets/62804edb-f6c4-4067-ac46-4c56013f38c2)

2. Editing a task:
   
![image](https://github.com/user-attachments/assets/a2142d26-a727-45f4-928d-50587d5f0514)
![image](https://github.com/user-attachments/assets/1f27b7d4-6824-410a-a7a7-cd8cb6bf06aa)

-- Task Edited successfully 

-- -- Task Added Successfully:
![image](https://github.com/user-attachments/assets/8d0a77ab-127a-4ea8-9b5c-4987b1601940)

3. Deleting a Task:

   ![image](https://github.com/user-attachments/assets/64a98b1e-d630-44d9-b1a5-510746568c54)

   (deleted ml project task)

4. Mark as Completed:
   ![image](https://github.com/user-attachments/assets/4e6efd27-20dc-44aa-b5f7-dc87c77db7fb)
   
   ![image](https://github.com/user-attachments/assets/154a795a-ec4d-4f8e-a80f-ee1204eb450a)

   ![image](https://github.com/user-attachments/assets/b8fffe17-5e64-4466-828b-2b31493a6e25)

   (u can filter as: completed, incomplete, all tasks)

Your table gets updated in MongoDB:
![image](https://github.com/user-attachments/assets/7084fddd-d22f-4ba3-9191-bf73be6bd4a9)
