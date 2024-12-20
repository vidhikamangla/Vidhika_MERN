import { useState } from "react";
import "./TaskDetails.css";

const TaskDetails = ({ task, onEdit, onDelete, onComplete }) => {
  if (!task) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleTitleChange = (e) => setEditedTitle(e.target.value);
  const handleDescriptionChange = (e) => setEditedDescription(e.target.value);

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const updatedTask = { title: editedTitle, description: editedDescription };

    try {
      await onEdit(task._id, updatedTask);
      setIsEditing(false);
      setIsButtonPressed(true); 
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  const handleDelete = async () => {
    try {
      await onDelete(task._id);
      setIsButtonPressed(true);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleComplete = async () => {
    try {
      await onComplete(task._id);
      setIsButtonPressed(true);
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  return (
    <div
      className={`task-details-box ${task.isCompleted ? "completed-task" : ""}`}
    >
      {isButtonPressed ? (
        <div>
            <p>Sort and manage your tasks with ease :)) !</p> 
        </div>
      ) : (
        <>
          {isEditing ? (
            <form onSubmit={handleEditSubmit}>
              <div>
                <label>Title</label>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={handleTitleChange}
                  required
                />
              </div>
              <div>
                <label>Description</label>
                <textarea
                  value={editedDescription}
                  onChange={handleDescriptionChange}
                  required
                />
              </div>
              <button type="submit">Save Changes</button>
            </form>
          ) : (
            <>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
              {!task.isCompleted && (
                <button onClick={handleComplete}>Mark as Completed</button>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default TaskDetails;