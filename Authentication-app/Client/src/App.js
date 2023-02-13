import "./App.css";
import Axios from "axios";
import { useState } from "react";
import Cookies from "universal-cookie";
const cookies = new Cookies();

function App() {
  const [userData, setUserdata] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const addUserData = (e) => {
    const { name, value } = e.target;
    setUserdata(() => {
      return {
        ...userData,
        [name]: value,
      };
    });
  };

  const singnup = () => {
    Axios.post("http://localhost:5000/createProduct", userData)
      .then((response) => {
        cookies.set("e-kthl", response.data.token, {
          path: "/",
          expires: new Date(Date.now() + 10000000),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getProfile = () => {
    const cookie = cookies.get("e-kthl");
    Axios.post("http://localhost:5000/profile", {
      cookie: cookie,
    })
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Home</h1>
      <div className="container">
        <div className="field">
          <label for="exampleFormControlInput1" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name"
            onChange={addUserData}
            name="name"
          />
        </div>
        <div className="field">
          <label for="exampleFormControlInput1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            onChange={addUserData}
            name="email"
          />
        </div>
        <div className="field">
          <label for="exampleFormControlInput1" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="address"
            onChange={addUserData}
            name="address"
          />
        </div>
        <div className="field">
          <label for="exampleFormControlInput1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleFormControlInput1"
            onChange={addUserData}
            name="password"
          />
        </div>
        <hr />
        <button className="btn btn-success" onClick={singnup}>
          Sign up
        </button>
        <button className="btn btn-primary" onClick={getProfile}>
          Profile
        </button>
      </div>
    </div>
  );
}

export default App;
