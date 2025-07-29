import React, { useState } from "react";

const List = ({ items = [], heading }) => {
  console.log(items);

  const [selectedIndex, setSelectedIndex] = useState(-1);
  console.log(selectedIndex);

  return (
    <div className="p-6 text-xl">
      <h1 className="text-2xl font-bold text-red-300">{heading}</h1>

      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "hover:cursor-pointer bg-blue-500 m-6"
                : "m-3"
            }
            onClick={() => setSelectedIndex(index)}
            key={index}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
