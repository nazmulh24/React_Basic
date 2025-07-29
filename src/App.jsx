import { useState } from "react";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

function App() {
  const [cartItems, setCartItems] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
  ]);

  const handleRemoveItem = (item) => {
    setCartItems(cartItems.filter((product) => product !== item));
  };

  return (
    <div className="m-5">
      <Navbar cartItemsCount={cartItems.length} />
      <Cart
        cartItems={cartItems}
        onClear={() => setCartItems([])}
        onRemove={handleRemoveItem}
      />
    </div>
  );
}

export default App;
