import Taskcard from "./TaskCard";
import { TaskContext } from "../../context/TaskContext";
import { useContext } from "react";

function TaskList() {
  //* From the object we are going to extract the tasks parameter
  //*
  //*Receives the object with the properties of the html element
  //*
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return (
      <h1 className="text-white text-4xl font-bold text-center">
        No tasks found
      </h1>
    );
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => {
        //* Access object data
        return (
          //* Always put a return in .map
          <Taskcard key={task.id} task={task} /> //* We reuse the component | Tasks are not removed, because they are being mapped
        );
      })}
    </div>
  );
}

export default TaskList;
