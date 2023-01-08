import { useContext } from "react"; //* We must import useContext, in order to use the context
import { TaskContext } from "../../context/TaskContext";

function TaskCard({ task }) {
  //*  Tasks is used as a prop in the tasklist .map
  //*We extract the value it has
  // const value = useContext(TaskContext); //* With the name of the context we bring it to the TaskCard component
  // console.log(value);

  const { deleteTask } = useContext(TaskContext); //*
  return (
    // <TaskContext>
    //   <div>
    //     <h1>{task.title}</h1>
    //     <p>{task.description}</p>
    //     <button
    //       onClick={(e) => {
    //         console.log(e);
    //         deleteTask(task.id);
    //       }}
    //     >
    //       Delete task
    //     </button>
    //   </div>
    // </TaskContext>
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={(e) => {
          deleteTask(task.id);
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default TaskCard;
