import { useState, useEffect } from "react";

import { Link, useSearchParams } from "react-router-dom";
import { BlogFilter } from "../components/BlogFilter";
import { typeAPI } from "../api/api";
import { useAppDispatch } from "../hooks/hook";
import { fetchTypes, addNewType } from "../store/typeSlice";
import TypeList from "../components/Type/TypeList";
import NewTypeForm from "../components/Commen/UI/NewTypeForm";

const TypePage = () => {
  const [type, setType] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [text, setText] = useState("");
  const dispatch = useAppDispatch();

  const handleAction = () => {
    dispatch(addNewType(text));
    setText("");
  };

  useEffect(() => {
    dispatch(fetchTypes());
  }, [dispatch]);

  const getTypes = async () => {
    try {
      const data = await typeAPI.getType();

      setType(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getTypes();
  }, []);

  return (
    <div>
      <h1>Темы карточек</h1>

      <NewTypeForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TypeList />

      {/* <Link
        to="/type/new"
        style={{ margin: "1rem 0", display: "inline-block" }}
      >
        <h2>Добавить новую тему карточек</h2>
      </Link> */}
      {/* {type
        .filter(
          (type) => type.name.includes(typeQuery) && type.id >= startsFrom
        )
        .map((type) => (
          <Link key={type.id} to={`/type/${type.id}`}>
            <li>{type.name}</li>
          </Link>
        ))} */}
    </div>
  );
};
export { TypePage };
