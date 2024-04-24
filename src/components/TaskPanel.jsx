import { useState } from 'react';

const TaskPanel = () => {
    const [ task, setTask ] = useState("");

    const handleAddTask = (event) =>{
        event.preventDefault();
        console.log(task);
    }

        // const [cursorPosition, setCursorPosition] = useState({ top: 0, left: 0 })
        //  const onMouseMove = e =>
        //  setCursorPosition({ top: e.screenY, left: e.screenX });
  
        //  return <div onMouseMove={onMouseMove} >
        //      <div style={{position: 'absolute', ...cursorPosition }} />
        //    </div>

    return <form  
                onSubmit={handleAddTask}
                className="mt-[120px] mx-auto p-[20px] w-[500px] h-[500px] text-center text-l text-pink-100 font-bold bg-rose-800 rounded-xl"
            >
        <h3 
            className="my-[20px] text-xl"
        >
                What tasks do you have today?
        </h3>
        <input 
            className="p-[10px] mr-[50px] bg-rose-800 border-2 rounded-xl"
            onChange={
                (event)=> setTask(event.target.value)
            }
        />
        <button
            className="p-[10px] border-2 rounded-xl" 
        >
            Add Task
        </button>
    </form>
}

export default TaskPanel;