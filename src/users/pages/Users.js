import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const users = [
    { id: 1, name: "Kate", places: 1 },
    { id: 2, name: "Mike", places: 3 },
    { id: 3, name: "Steve", places: 3 },
  ];

  return (
    <div>
      <UsersList users={users} />
    </div>
  );
};

export default Users;
