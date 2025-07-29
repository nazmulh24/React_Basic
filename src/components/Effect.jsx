import React, { useEffect, useState } from "react";
import Button from "./Button";

const Effect = () => {
  const [users, setUsers] = useState("");
  const [dependencyA, setdependencyA] = useState(0);
  const [dependencyB, setdependencyB] = useState(0);

  useEffect(() => {
    console.log("Effect Occured");
    setUsers(["John Doe"]);
  }, [dependencyA, dependencyB]);

  return (
    <div>
      <h1>User List</h1>
      <Button onClick={() => setdependencyA(Math.random())}>Click_A</Button>
      <Button onClick={() => setdependencyB(Math.random())}>Click_B</Button>
    </div>
  );
};

export default Effect;

/*
Side Effects -
  1. Manually modify the DOM
  2. Store  data in localStorage
  3. Call the API to fetch/save data
*/
