import { useStateValue } from "../StateProvider/StateProvider";

function Login() {
  const [{ logIndata }, dispatch] = useStateValue();
  let usrName = "";

  const login = () => {
    dispatch({
      type: "LOG_IN",
      item: {
        userName: usrName,
        isLogin: true,
      },
    });
  };

  return (
    <div>
      UserName:
      <input
        onChange={(env) => {
          usrName = env.target.value;
        }}
      ></input>
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
