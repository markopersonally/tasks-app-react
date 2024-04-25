// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const AddTask = ({ task }) => {
  return (
    <div className="w-100% p-[10px] mt-[50px] flex row items-center gap-2 border-2 rounded-md">
      <p className="justify-start">{task.task}</p>
      <div className="justify-end gap-[10px] hover:cursor-pointer">
        <FontAwesomeIcon icon={faTrashCan} />
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
    </div>
  );
};

export default AddTask;
