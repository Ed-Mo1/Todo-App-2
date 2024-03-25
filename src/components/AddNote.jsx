import { HiPlus } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAddTaskMutation } from "../app/services/tasksData";
const AddNote = () => {
  const [addTask] = useAddTaskMutation();
  const [task, setTask] = useState("");

  const handelAddTask = (e) => {
    e.preventDefault();
    if (task.length > 0) {
      addTask({ taskName: task, completed: false });
      setTask("");
    }
  };

  return (
    <div className="flex items-center gap-5">
      <form onSubmit={(e) => handelAddTask(e)} className="flex-grow-[1]">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="py-4 placeholder-gray w-full focus:outline-none text-white ps-4 bg-transparent border-dark-purple border-solid border-2 rounded-lg"
          placeholder="Add a new task"
        />
      </form>
      <motion.button
        onClick={handelAddTask}
        whileTap={{ scale: 0.9 }}
        whileHover={{ borderRadius: "5px", transition: { duration: 0.2 } }}
        className=" bg-light-purple text-white p-3 rounded-lg"
      >
        <HiPlus className="text-3xl" />
      </motion.button>
    </div>
  );
};

export default AddNote;
