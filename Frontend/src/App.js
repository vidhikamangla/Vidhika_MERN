import React, { useEffect, useState } from "react";
import { fetchTasks, createTask, updateTask, deleteTask } from "./api";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });

  useEffect(() => {
    const getTasks = async () => {
      const { data } = await fetchTasks();
      setTasks(data);
    };
    getTasks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form._id) {
      await updateTask(form._id, form);
    } else {
      await createTask(form);
    }
    setForm({ title: "", description: "" });
    window.location.reload();
  };

  const handleEdit = (task) => setForm(task);

  const handleDelete = async (id) => {
    await deleteTask(id);
    window.location.reload();
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        ></textarea>
        <button type="submit">{form._id ? "Update" : "Add"} Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <button onClick={() => handleEdit(task)}>Edit</button>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
