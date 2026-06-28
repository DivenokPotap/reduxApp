import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { statusFilters } from "../../redux/constants";

const getvisibletasks = (tasks,statusFilter) => {
  switch(
    statusFilter
  ) { case 
    statusFilters.active : return tasks.filter(task => !task.completed)
   
    case
    statusFilters.completed : return tasks.filter(task => task.completed)

    default : return tasks
  }
}

export const TaskList = () => {
  const tasks = useSelector(state => state.tasks)
  const filter = useSelector(state => state.filters.status)
  const visibletasks = getvisibletasks(tasks,filter)
  return (
    <ul className={css.list}>
      {visibletasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
