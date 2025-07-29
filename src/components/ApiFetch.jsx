import axios from "axios";
import React, { useEffect, useState } from "react";

const ApiFetch = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/users")
  //       .then((res) => res.json())
  //       .then((data) => setUsers(data));
  //     //   .then((data) => console.log(data));
  //   }, []);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((data) => setUsers(data.data))
      .catch((err) => setError(err.message));
    //   .catch((err) => console.log(err.message));
  }, []);

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
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
