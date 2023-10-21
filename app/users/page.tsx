import React from "react";

interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users:User[] = await res.json();
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
};

export default UsersPage;
