import React from "react";
import { useState, useEffect } from "react";
import MyButton from "../components/Commen/UI/button/MyButton";
import MyInput from "../components/Commen/UI/input/MyInput";
//import { typeAPI } from "../api/api";
import classes from "./Todopage.module.css";

import { useDispatch, useSelector } from "react-redux";
import TodoList from "../components/Todo/TodoList";
import NewTodoForm from "../components/Commen/UI/NewTodoForm";
import { useAppDispatch } from "../hook";
import { addTodo } from "../store/todoSlice";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  //const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const addTask = () => {
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div className={classes.todo}>
      <h1>Список дел</h1>

      <NewTodoForm value={text} updateText={setText} handleAction={addTask} />
      <TodoList />
    </div>
  );
};
export { Todo };
