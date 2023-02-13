import axios from "axios";
import "./App.css";

function App() {
  let userDetails = {
    name: "",
    address: "",
    passoword: "",
  };

  const userSubmit = () => {
    axios
      .post("http://localhost:5000/user", {
        name: userDetails.name,
        address: userDetails.address,
        passoword: userDetails.passoword,
      })
      .then(() => {
        console.log("Insert successfull");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const findData = () => {
    axios.get("http://localhost:5000/find").then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <h1>Form</h1>
      Name:<input onChange={(e) => (userDetails.name = e.target.value)}></input>
      <br />
      Address:
      <input onChange={(e) => (userDetails.address = e.target.value)}></input>
      <br />
      Password:
      <input onChange={(e) => (userDetails.passoword = e.target.value)}></input>
      <br />
      <button onClick={userSubmit}>Submit</button>
      <button onClick={findData}>Find</button>
    </div>
  );
}

export default App;
