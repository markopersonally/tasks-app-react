import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faEdit, faSave } from "@fortawesome/free-regular-svg-icons";

const AddTask = ({ task, deleteTask }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.task);

  const handleEditTask = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveTask = () => {
    task.task = editedTask;
    setIsEditing(false);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  
  let pClasses = "font-medium";
  
  if (isChecked) {
    pClasses += " italic line-through";
  } else {
    pClasses += " no-underline";
  }

  return (
    <div className="w-100% p-[10px] mt-[10px] text-pink-300 flex row justify-between items-center gap-2 border-2 rounded-md">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="w-[20px] h-[20px] accent-pink-900 border-pink-300 rounded focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-pink-800 focus:ring-2 dark:bg-pink-700 dark:border-pink-600"
      />
      {isEditing ? (
        <input
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
          className="flex-grow border border-gray-400 p-1 rounded"
        />
      ) : (
        <p className={pClasses}>{task.task}</p>
      )}
      <div>
        {isEditing ? (
          <FontAwesomeIcon
            className="w-[20px] h-[20px] justify-end gap-[10px] hover:cursor-pointer"
            icon={faSave}
            onClick={handleSaveTask}
          />
        ) : (
          <FontAwesomeIcon
            className="w-[20px] h-[20px] justify-end gap-[10px] hover:cursor-pointer"
            icon={faEdit}
            onClick={handleEditTask}
          />
        )}
        <FontAwesomeIcon
          className="w-[20px] h-[20px] justify-end gap-[10px] hover:cursor-pointer"
          icon={faTrashCan}
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </div>
  );
};

export default AddTask;
