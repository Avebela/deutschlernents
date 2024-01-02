import useInput from "../hooks/useInput";

function LoginWithOwnHook() {
  const userName = useInput("");
  const password = useInput("");
  return (
    <div>
      <input {...userName} type="text" placeholder="userName" />
      <input {...password} type="text" placeholder="password" />
      <button
        onClick={() => {
          console.log(userName.value, password.value);
        }}
      >
        Click
      </button>
    </div>
  );
}
