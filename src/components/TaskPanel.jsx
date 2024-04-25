import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTask from "./AddTask";

const TaskPanel = () => {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (todo) => {
    setTasks([
      ...tasks,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const handleAddTask = (event) => {
    event.preventDefault();
    if (value.trim() !== "") {
      addTask(value);
      setValue("");
    }
  };

  return (
    <form
      onSubmit={handleAddTask}
      className="mt-[120px] mx-auto p-[20px] w-[500px] h-[500px] text-center text-l text-pink-100 font-bold bg-rose-800 rounded-xl overflow-auto"
    >
      <h3 className="my-[20px] text-xl">What tasks do you have today?</h3>
      <input
        className="p-[10px] mr-[50px] bg-rose-800 border-2 rounded-xl"
        placeholder="Write your task..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <button className="p-[10px] border-2 rounded-xl">Add Task</button>
      {tasks.map((task) => (
        <AddTask task={task} key={task.id} /> 
      ))}
    </form>
  );
};

export default TaskPanel;
