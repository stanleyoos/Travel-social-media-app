import React from "react";

import "./UsersList.css";
import UserItem from "./UserItem";

const UsersList = ({ users }) => {
  if (users.length === 0) {
    return <div className="center">No users found</div>;
  }

  return (
    <ul className="users-list">
      {users.map((user) => (
        <UserItem
          name={user.name}
          id={user.id}
          key={user.id}
          placeCount={user.places}
          image={user.image}
        />
      ))}
    </ul>
  );
};

export default UsersList;
