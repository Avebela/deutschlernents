import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import MyButton from "../components/Commen/UI/button/MyButton";

const Singlepage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [type, setType] = useState(null);
  const goBack = () => {
    navigate(-1);
  };
  // const goBack = () => {
  //   navigate("/type", { state: 123 });
  // };
  const goHome = () => {
    navigate("/", { replace: true });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/api/type/${id}`)
      .then((res) => res.json())
      .then((data) => setType(data));
  }, [id]);

  return (
    <div>
      <MyButton onClick={goBack}>Назад</MyButton>
      <MyButton onClick={goHome}>На главную страницу</MyButton>
      {type && (
        <>
          <h3>{type.name}</h3>

          <div>
            <Link to={`/type/${id}/edit`}>Изменить тему</Link>
          </div>
          <div>
            <Link to={`/type/${id}/delete`}>Удалить тему</Link>
          </div>
        </>
      )}
    </div>
  );
};

export { Singlepage };
