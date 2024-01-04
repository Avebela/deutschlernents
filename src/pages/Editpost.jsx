import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MyButton from "../components/Commen/UI/button/MyButton";
import MyInput from "../components/Commen/UI/input/MyInput";
//import { typeAPI } from "../api/api";

const Editpost = () => {
  const { id } = useParams();

  const [type, setType] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/type/${id}`)
      .then((res) => res.json())

      .then((data) => setType(data));
  }, [id]);

  const [name, setName] = useState("");
  const editPost = (e) => {
    setName(e.target.value);
  };

  const submitEdit = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/type/`, {
        method: "PUT",
        body: JSON.stringify({ name, isactive, id }), // данные могут быть 'строкой' или {объектом}!
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

  const [isactive, setIsActive] = useState(true);

  const reactive = () => {
    setIsActive((type.isactive = !type.isactive));
  };

  return (
    <div>
      <h2>Изменить тему карточек с id = {id}</h2>

      {type && (
        <>
          <form>
            <p className="font-bold">{type.name}</p>
            <MyInput
              name="typeName"
              type="text"
              value={name}
              onChange={editPost}
            />

            <input
              type="checkbox"
              checked={type.isactive}
              //   onClick={() => dispatch(toggleTodoComplete({ id }))}
              // onClick={submitReactive}
              // onClick={() => setIsActive((type.isactive = !type.isactive))}
              //onClick={() => setIsActive(false)}
              onClick={reactive}
            />

            <MyButton //disabled={}
              onClick={submitEdit}
            >
              Применить изменения
            </MyButton>

            {/* <h3>{type.isactive}</h3> */}
          </form>
        </>
      )}
    </div>
  );
};

export { Editpost };
