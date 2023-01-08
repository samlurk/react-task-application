import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/Task"; //* Constants can be aliased | We import only once, and then reuse from app.

export const TaskContext = createContext(); //* returns an object | It is the name of the context | It is the one that stores the data
export function TaskContextProvider(props) {
  //* It is the component that contains all of the components
  const [tasks, setTasks] = useState([]); //* When the component is created, tasks(data), does not exist

  useEffect(() => {
    setTasks(data);
  }, []); //* It will be executed when I load the component

  function createTask(title, description) {
    //*It is assumed that we will receive a javascript object
    setTasks([
      ...tasks,
      {
        //* Instead of creating the task in the taskform, we can create it in the app
        id: tasks.length,
        title,
        description,
      },
    ]); //*We assign the new tasks in an array
  }
  function deleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }
  return (
    // <>
    //   <h1>Context Component</h1>
    //   {props.children}{" "}
    //   {/* //*what we pass to the component from another component will be placed here */}
    // </>

    //* We create the component
    //*
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
