import React, { useState } from "react";
import Button from "./Button";

const Person = () => {
  const [person, setPerson] = useState("apatoto");

  const handleClick = () => {
    setPerson("Nazmul Hossain");
    // console.log(person);
  };
  console.log(person);

  return (
    <div className="p-6">
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default Person;

// --> State works asynchronously, so the console.log will show the previous state value.
