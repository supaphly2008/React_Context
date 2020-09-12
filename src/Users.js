import React, { useContext } from "react";
import styled from "styled-components";
import UserContext from "./UserContext";
import AddUser from "./AddUser";
import Card from "./components/Card";
import Button from "./components/Button";

const UserWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const Users = () => {
  const { users } = useContext(UserContext);
  console.log("users from user", users);
  return (
    <div className="users">
      <h1>Users</h1>
      <AddUser />
      <UserWrapper>
        {users.map((user) => (
          <Card first={user.first} last={user.last} image={user.image}>
            <Button size="medium">Edit</Button>
          </Card>
        ))}
      </UserWrapper>
    </div>
  );
};
export default Users;
