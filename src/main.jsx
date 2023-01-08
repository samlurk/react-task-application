import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TaskContextProvider } from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* It is recommended to use strictMode to recommend how to correct code errors.*/}

    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>
);
