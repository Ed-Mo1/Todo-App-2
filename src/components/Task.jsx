import { motion } from "framer-motion";
import { PiTrashSimple } from "react-icons/pi";
import { HiOutlineXMark } from "react-icons/hi2";
import {
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../app/services/tasksData";
import { IoMdCheckmark } from "react-icons/io";
const DoneTask = ({ taskName, id, completed }) => {
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  return (
    <motion.div
      layout
      className={`bg-dark-midnight-blue py-6 px-5 rounded-lg ${
        completed ? "text-light-sea-green" : "text-light-purple"
      } font-bold flex justify-between items-center `}
    >
      <span
        className={`${
          completed && "line-through"
        }overflow-hidden text-ellipsis`}
      >
        {taskName}
      </span>
      <div className="flex gap-5 text-3xl">
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => updateTask({ taskName, id, completed: !completed })}
          className="cursor-pointer hover:text-dark-purple transition-colors"
        >
          {completed ? <HiOutlineXMark /> : <IoMdCheckmark />}
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.9 }}
          onClick={() => deleteTask(id)}
          className="cursor-pointer hover:text-dark-purple transition-colors"
        >
          <PiTrashSimple />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DoneTask;
