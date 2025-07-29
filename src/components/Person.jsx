import React, { useState } from "react";
import Button from "./Button";

const Person = () => {
  const person_obj = {
    firstName: "first_name",
    lastName: "last_name",
    email: "email@example.com",
    address: { //----> Nested object
      city: "DKA",
      country: "BD",
    },
  };
  const [Person, setPerson] = useState(person_obj);

  const handleClick = () => {
    const newPerson = {
      ...Person,

      email: "nazmul@hossain.com",

      address: {
        ...Person.address, //---> update nested object properties
        city: "Dhaka",
        country: "Bangladesh",
      },
    };

    setPerson(newPerson); //---> Update the state with the new object
  };

  return (
    <div className="p-6">
      <h1>
        {Person.firstName} {Person.lastName} - {Person.email} --{" "}
        {Person.address.city}, {Person.address.country}
      </h1>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default Person;
