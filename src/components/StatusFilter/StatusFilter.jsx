import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { statusFilters } from "../../redux/constants";
import { setStatusFilter } from "../../redux/filterReducer";

export const StatusFilter = () => {

  const filter = useSelector(state => state.filters.status)

  const dispatch = useDispatch()

  const handleFilterChange = (filter) =>{
    return dispatch(setStatusFilter(filter))
  }

  return (
    <div className={css.wrapper}>
      <Button onClick={() => handleFilterChange(statusFilters.all)} selected={filter===statusFilters.all}>All</Button>
      <Button onClick={() => handleFilterChange(statusFilters.active)} selected={filter===statusFilters.active}>Active</Button>
      <Button onClick={() => handleFilterChange(statusFilters.completed)} selected={filter===statusFilters.completed}>Completed</Button>
    </div>
  );
};
