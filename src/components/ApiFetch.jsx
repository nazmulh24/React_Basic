import React, { useEffect, useState } from "react";

const ApiFetch = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
    //   .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <ul className="list-disc m-5">
        {users.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiFetch;
