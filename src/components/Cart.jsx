import React from "react";
import Button from "./Button";

const Cart = ({ cartItems, onClear, onRemove }) => {
  return (
    <div>
      <ul className="list-disc">
        {cartItems.map((item) => (
          <li onClick={() => onRemove(item)} key={item}>
            {item}
          </li>
        ))}
      </ul>

      <Button onClick={onClear}>Clear All Cart</Button>
    </div>
  );
};

export default Cart;
