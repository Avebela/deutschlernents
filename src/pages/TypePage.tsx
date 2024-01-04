import { useState, useEffect } from "react";

import { typeAPI } from "../api/api";
import { useAppDispatch } from "../hooks/hook";
import { fetchTypes, addNewType } from "../store/type/typeSlice";
import TypeList from "../components/Type/TypeList";
import NewTypeForm from "../components/Commen/UI/NewTypeForm";
import {
  useGetTypesQuery,
  useAddTypeMutation,
  useDeleteTypeMutation,
} from "../store/type/typeApi";
import { IType, TypesState } from "../models/models";

const TypePage = () => {
  const [type, setType] = useState([]);
  const [newType, setNewType] = useState("");
  const { data = [], isError, isLoading } = useGetTypesQuery();
  const [addNType, { isError: AddError }] = useAddTypeMutation();
  const [deleteType] = useDeleteTypeMutation();

  if (isLoading) return <p className="text-center">Loading...</p>;

  //const [text, setText] = useState("");
  //const dispatch = useAppDispatch();

  // const handleAction = () => {
  //   dispatch(addNewType(text));
  //   setText("");
  // };
  const handleNType = async () => {
    if (newType) {
      await addNType({ name: newType }).unwrap();
      setNewType("");
    }
    //   dispatch(addNewType(text));
    //   setText("");
  };

  const handleDeleteType = async (id: string) => {
    await deleteType(id).unwrap();
  };

  // useEffect(() => {
  //   dispatch(fetchTypes());
  // }, [dispatch]);

  // const getTypes = async () => {
  //   try {
  //     const data = await typeAPI.getType();

  //     setType(data);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // useEffect(() => {
  //   getTypes();
  // }, []);

  return (
    <div>
      <h1>Темы карточек</h1>

      {/* <NewTypeForm
        value={text}
        updateText={setText}
        handleAction={handleAction}
      /> */}

      <div>
        <input
          type="text"
          value={newType}
          onChange={(e) => setNewType(e.target.value)}
        />
        <button onClick={handleNType}>Добавить тип</button>
      </div>

      <ul>
        {data.map((type) => (
          <li
            key={type.id}
            onClick={() => handleDeleteType(type.id)}
            className="py-2 px-4 hover:bg-gray-500 hover:text-white transition-colors cursor-pointer"
          >
            {type.name}
          </li>
        ))}
      </ul>

      {/* //   className="list-none absolute top-[42px] left-0 right-0 max-h-[200px] overflow-y-scroll shadow-md bg-white" */}
      {/* <TypeList /> */}

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
