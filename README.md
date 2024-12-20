# Vidhika_MERN
Task Manager App: a simple application using the MERN stack and upload the having the basic CRUD (Create, Read, Update, Delete) functionality for managing tasks.

Here's a final **README.md** for your project that includes clear instructions on how to set up, run, and use your MERN stack task manager application:

---

# TaskManager - A MERN CRUD Application

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

- **Node.js** (LTS version)
- **MongoDB** (or use MongoDB Atlas for cloud-hosted database)
- **npm** (comes with Node.js)

---

### Step-by-Step Setup

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-manager-mern.git
cd task-manager-mern
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

## License

This project is licensed under the MIT License.

---

## Conclusion

You've now set up a fully functional **TaskManager** application using the MERN stack. You can add more features like authentication, validation, or deploy it on cloud platforms like Heroku or Vercel.

Happy coding! 😄

---

### **Note:** Replace the link to your GitHub repository in the cloning instructions with your actual project link.
