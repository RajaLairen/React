import "./App.css";
import { useStateValue } from "./StateProvider/StateProvider";
import Login from "./Component/Login";
import Profile from "./Component/Profile";

function App() {
  const [{ logIndata }, dispatch] = useStateValue();
  return <div>{logIndata.isLogin ? <Profile /> : <Login />}</div>;
}

export default App;
