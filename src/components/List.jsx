import React from "react";

const List = () => {
  const items = ["Item 1", "Item 2", "Item 3"];

  items.map((item) => {
    console.log(item);
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-red-300">Item List</h1>

      <div>
        {items.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      {/* Another way */}
      <div>
        {items.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
      {/* Another way like --> List */}
      <ul>
        {items.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default List;
