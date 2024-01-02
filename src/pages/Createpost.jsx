import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Createpost = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Создать новую тему карточек</h1>
      <button onClick={() => signout(() => navigate("/", { replace: true }))}>
        Выйти
      </button>
    </div>
  );
};
export { Createpost };
