import classes from "./Todopage.module.css";
import { useAppDispatch } from "../../hook";
import { removeTodo, toggleComplete } from "../../store/todoSlice";

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
        onClick={() => dispatch(toggleComplete(id))}
      />
      <span>{title}</span>
      <span
        className={classes.delete}
        //    onClick={() => dispatch(removeTodo({ id }))}
        onClick={() => dispatch(removeTodo(id))}
      >
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
