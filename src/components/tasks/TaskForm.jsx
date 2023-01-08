import { useState, useContext } from "react";
import { TaskContext } from "../../context/TaskContext";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext); //* From the whole object I want to createTask
  function handleSubmit(e) {
    e.preventDefault();
    // const newTask = {
    //   // title: title,
    //   id
    //   title,
    //   description: title,
    // };
    // createTask(newTask); //* We call the component imported from app
    createTask(title, description);
    setTitle("");
    setDescription("");
  }
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2x1 font-bold text-white mb-3">Create your task</h1>
        <input
          placeholder="Write your task title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Write the description of the task"
          onChange={(e) => setDescription(e.target.value)}
          value={description} //* When formatting the status changes the input becomes empty
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
