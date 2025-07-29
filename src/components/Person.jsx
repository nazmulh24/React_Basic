import React, { useState } from "react";
import Button from "./Button";

const Person = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [lastName, setLastName] = useState("");

  const person_obj = {
    firstName: "first_name",
    lastName: "last_name",
    email: "email@example.com",
    address: {
      //----> Nested object
      city: "DKA",
      country: "BD",
    },
  };
  const [Person, setPerson] = useState(person_obj);

  // --> State is Immutable. We cannot change the state directly.

  const handleClick = () => {
    // setFirstName("Nazmul");
    // setLastName("Hossain");

    // const newPerson = {
    //   firstName: "Nazmul",
    //   lastName: "Hossain",
    //   email: "nazmul@hossain.com",
    // };

    const newPerson = {
      ...Person, //---> Spread operator to copy existing properties

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
      {/* <h1>
        {firstName} {lastName}
      </h1> */}
      <h1>
        {Person.firstName} {Person.lastName} - {Person.email} --{" "}
        {Person.address.city}, {Person.address.country}
      </h1>
      <Button onClick={handleClick}>Click Me</Button>
    </div>
  );
};

export default Person;
