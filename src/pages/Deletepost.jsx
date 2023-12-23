import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { typeAPI } from "../api/api";

const Deletepost = () => {
  const { id } = useParams();

  const [type, setType] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/type/${id}`)
      .then((res) => res.json())

      .then((data) => setType(data));
  }, [id]);

  const submitDelete = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/type/${id}`, {
        method: "DELETE",
        // body: JSON.stringify({ id }), // данные могут быть 'строкой' или {объектом}!
        headers: {
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log("Успех:", JSON.stringify(json));
    } catch (error) {
      console.error("Ошибка:", error);
    }
  };

  return (
    <div>
      <h2>Удалить тему карточек с id = {id}</h2>

      {type && (
        <>
          <form onSubmit={submitDelete}>
            <h3>{type.name}</h3>
            <label>
              Тема: <span name="typeName">{type.name}</span>
              <button>Удалить тему</button>
            </label>
          </form>
        </>
      )}
    </div>
  );
};

export { Deletepost };
