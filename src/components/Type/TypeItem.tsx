import classes from "./Typepage.module.css";
import { useAppDispatch } from "../../hooks/hook";
import {
  // deleteTodo,
  toggleStatus,
} from "../../store/type/typeSlice";

interface TypeItemProps {
  id: string;
  name: string;
  isactive: boolean;
}

const TypeItem: React.FC<TypeItemProps> = ({ id, isactive, name }) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={isactive}
        //   onClick={() => dispatch(toggleTodoComplete({ id }))}
        onClick={() => dispatch(toggleStatus(id))}
      />
      <span>{name}</span>
      {/* <span
        className={classes.delete}
        //    onClick={() => dispatch(removeTodo({ id }))}
        onClick={() => dispatch(deleteTodo(id))}
      >
        &times;
      </span> */}
    </li>
  );
};

export default TypeItem;
