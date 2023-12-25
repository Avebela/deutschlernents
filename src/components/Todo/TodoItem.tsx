import classes from "./Todopage.module.css";
import { useAppDispatch } from "../../hook";
import { deleteTodo, toggleStatus } from "../../store/todoSlice";

interface TodoItemProps {
  id: string;
  title: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, completed, title }) => {
  const dispatch = useAppDispatch();

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        //   onClick={() => dispatch(toggleTodoComplete({ id }))}
        onClick={() => dispatch(toggleStatus(id))}
      />
      <span>{title}</span>
      <span
        className={classes.delete}
        //    onClick={() => dispatch(removeTodo({ id }))}
        onClick={() => dispatch(deleteTodo(id))}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
