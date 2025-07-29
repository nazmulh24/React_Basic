import React from "react";

const List = () => {
  const items = ["Item 1", "Item 2", "Item 3"];

  let selectedIndex = -1;
  const handleItemClick = (index) => {
    selectedIndex = index;
    console.log(selectedIndex);
  };

  return (
    <div className="p-6 text-xl">
      <h1 className="text-2xl font-bold text-red-300">Item List</h1>

      <ul>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "cursor-pointer hover:text-red-500 bg-blue-500 m-3"
                : "m-3"
            }
            onClick={() => handleItemClick(index)}
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
