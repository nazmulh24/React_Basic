import React, { useEffect } from "react";

let count = 0;

const Effect = () => {
  useEffect(() => {
    console.log("Effect Occured");
  }, []);

  return (
    <div>
      <h1>User List : {++count}</h1>
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
