import { useGetTasksQuery } from "../app/services/tasksData";
import Task from "./Task";
const UnCompletedList = () => {
  const { data } = useGetTasksQuery();
  const count = () => {
    return data?.filter((task) => !task.completed).length;
  };
  return (
    <div>
      <h3 className="text-white font-bold mb-5 text-xl">
        Tasks to do - {count()}
      </h3>
      <div className="flex flex-col gap-5">
        {data?.map((task) => {
          return !task.completed && <Task key={task.id} {...task} />;
        })}
      </div>
    </div>
  );
};

export default UnCompletedList;
