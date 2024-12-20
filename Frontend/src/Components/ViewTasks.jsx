import { useState, useEffect } from "react";
import "./viewTasks.css";
import TaskDetails from "./TaskDetails";
import CreateTask from "./createTask";

const ViewTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showCreateTask, setShowCreateTask] = useState(false);

  const fetchTasks = async (filter = "") => {
    try {
      const url = filter
        ? `http://localhost:5000/tasks/filter/${filter}`
        : "http://localhost:5000/tasks"; 
      const response = await fetch(url);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  useEffect(() => {
    fetchTasks(); // fetch all tasks initially
  }, []);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
    setShowCreateTask(false);
  };

  const handleEditTask = async (id, updatedTask) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTask),
      });

      if (response.ok) {
        await fetchTasks();
        setSelectedTask({ ...selectedTask, ...updatedTask });
      } else {
        console.error("Failed to edit task");
      }
    } catch (error) {
      console.error("Error editing task:", error);
    }
  };

  const handleDeleteTask = async (id) => {
    try {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
      });
      setTasks((prevTasks) => prevTasks.filter((task) => task._id !== id));
      setSelectedTask(null);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleCompleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/tasks/complete/${id}`, {
        method: "PUT",
      });

      if (response.ok) {
        const updatedTask = await response.json();

        // update task list state
        setTasks((prevTasks) =>
          prevTasks.map((task) =>
            task._id === updatedTask._id ? updatedTask : task
          )
        );

        if (selectedTask && selectedTask._id === updatedTask._id) {
          setSelectedTask(updatedTask);
        }
      } else {
        console.error("Failed to mark task as complete");
      }
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  const handleCreateTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    setShowCreateTask(false);
  };

  const handleFilterCompleted = () => {
    fetchTasks("completed"); 
  };

  const handleFilterIncomplete = () => {
    fetchTasks("incomplete"); 
  };

  const handleFilterAll = () => {
    fetchTasks(); 
  };

  return (
    <div className="tasks-container">
      <div className="tasks-list">
        <button
          className="create-task-button"
          onClick={() => setShowCreateTask(true)}
        >
          Create Task
        </button>
        <div className="task-filter-buttons">
          <button onClick={handleFilterCompleted}>Completed</button>
          <button onClick={handleFilterIncomplete}>Incomplete</button>
          <button onClick={handleFilterAll}>All</button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              <button
                className={`task-button ${task.isCompleted ? "completed" : ""}`}
                onClick={() => handleTaskClick(task)}
              >
                {task.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="task-details-container">
        {showCreateTask ? (
          <CreateTask onCreate={handleCreateTask} />
        ) : (
          selectedTask && (
            <TaskDetails
              task={selectedTask}
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onComplete={handleCompleteTask} // pass the onComplete handler
            />
          )
        )}
      </div>
    </div>
  );
};

export default ViewTasks;