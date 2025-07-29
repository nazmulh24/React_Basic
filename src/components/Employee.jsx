import React, { useState } from "react";
import Button from "./Button";

const Employee = () => {
  const emp_arr = [
    { name: "John Doe", age: 30 },
    { name: "Jane Smith", age: 25 },
    { name: "Alice Johnson", age: 28 },
  ];
  const [employee, setEmployee] = useState(emp_arr);

  const handleUpdateAge = () => {
    const newArr = employee.map((emp) =>
      emp.name === "John Doe" ? { ...emp, age: emp.age + 1 } : emp
    );

    setEmployee(newArr);
  };

  return (
    <div className="m-10">
      <ul>
        {employee.map((emp, index) => (
          <li key={index} className="list-disc mb-2">
            {emp.name} - {emp.age}
          </li>
        ))}
      </ul>

      <Button onClick={handleUpdateAge} color="success">
        Update Age
      </Button>
    </div>
  );
};

export default Employee;
