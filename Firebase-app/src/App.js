import "./App.css";
import { db } from "./firebase";
import {
  getDocs,
  collection,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { async } from "@firebase/util";

function App() {
  const [users, setUsers] = useState([]);
  const userReference = collection(db, "users");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [idusr, setId] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userReference);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  });

  const addItem = async () => {
    await addDoc(userReference, {
      name: userName,
      email: email,
      address: address,
      password: password,
    });
  };

  const deleteItem = async () => {
    const userDoc = doc(db, "users", idusr);
    await deleteDoc(userDoc);
  };

  return (
    <div>
      <table>
        <tr>
          Name:<input onChange={(e) => setUserName(e.target.value)}></input>
        </tr>
        <tr>
          Email:<input onChange={(e) => setEmail(e.target.value)}></input>
        </tr>
        <tr>
          Address<input onChange={(e) => setAddress(e.target.value)}></input>
        </tr>
        <tr>
          Password<input onChange={(e) => setPassword(e.target.value)}></input>
        </tr>
      </table>
      <button onClick={addItem}>Submit</button>
      <br />
      Id:<input onChange={(e) => setId(e.target.value)}></input>
      <button onClick={deleteItem}>Submit</button>
      {users.map((user) => {
        return <h1>Hi {user.name}</h1>;
      })}
    </div>
  );
}

export default App;
