import React, { useEffect, useState } from "react";
import "./styles.css";
import Usercontext from "./UserContext";
import Users from "./Users";
import axios from "axios";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("useeffect");
    axios.get("https://randomuser.me/api/?results=20").then((res) => {
      const usersObj = res.data.results.map((user) => {
        return {
          first: user.name.first,
          last: user.name.last,
          image: user.picture.large
        };
      });
      setUsers(usersObj);
    });
  }, []);

  // console.log(users);

  return (
    <Usercontext.Provider value={{ users, setUsers }}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Users />
      </div>
    </Usercontext.Provider>
  );
}
