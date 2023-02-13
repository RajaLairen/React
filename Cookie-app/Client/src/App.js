import "./App.css";
import Axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const createCookie = (contain, duration) => {
    cookies.set("ekeithel", contain, {
      path: "/",
      expires: new Date(Date.now() + duration),
    });
    alert("Set cookie");
  };

  const setCook = () => {
    Axios.post("http://localhost:5000/getData")
      .then((response) => {
        let password = response.data.password;
        createCookie(password, 10000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={setCook}>Set Cookie</button>
    </div>
  );
}

export default App;
