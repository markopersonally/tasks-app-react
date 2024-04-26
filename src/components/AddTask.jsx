import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

const AddTask = ({ task, deleteTask }) => {
  const [isChecked, setIsChecked] = useState(false);

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
      <p className={pClasses}>{task.task}</p>
      <FontAwesomeIcon
        className="w-[20px] h-[20px] justify-end gap-[10px] hover:cursor-pointer"
        icon={faTrashCan}
        onClick={() => deleteTask(task.id)}
      />
    </div>
  );
};

export default AddTask;
