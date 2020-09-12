import React, { useContext, useState } from "react";
import UserContext from "./UserContext";
import Button from "./components/Button";

const AddUser = () => {
  const { users, setUsers } = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const addUser = () => {
    const userObj = {
      first: firstName,
      last: lastName
    };
    setUsers([...users, userObj]);
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="addUser">
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
        placeholder="First Name..."
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="Last Name..."
      />
      <Button disabled={!firstName || !lastName} onClick={addUser}>
        Add
      </Button>
    </div>
  );
};

export default AddUser;
