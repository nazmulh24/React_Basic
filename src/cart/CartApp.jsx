import React from "react";
import Button from "../components/Button.jsx";
import { useForm } from "react-hook-form";
import { Trash2 } from "lucide-react";

const CartApp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const cart = [
    { name: "item1", price: 10.0 },
    { name: "item2", price: 15.0 },
  ];

  const addItem = (data) => {
    console.log(data);
  };

  return (
    <div className="w-1/3 mx-auto p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        🛒 Shopping Cart
      </h2>

      {/* Add Cart Items Here */}
      <form className="space-y-4" onSubmit={handleSubmit(addItem)}>
        <div>
          <input
            {...register("itemName", { required: true })}
            type="text"
            placeholder="Item name"
            className="border px-4 py-2 w-full rounded"
          />
          {errors.itemName?.type === "required" && (
            <span className="text-red-500 text-sm">Item name is required</span>
          )}
        </div>

        <div>
          <input
            {...register("price", {
              valueAsNumber: true,
              required: true,
            })}
            type="number"
            placeholder="Item price"
            className="border px-4 py-2 w-full rounded"
          />
          {errors.price?.type === "required" && (
            <span className="text-red-500 text-sm">Item Price is required</span>
          )}
        </div>

        <Button type="submit" className="w-full">
          Add to Cart
        </Button>
      </form>

      {/* Cart Items List */}
      {cart.length > 0 ? (
        <div className="m-6">
          <h3 className="text-xl font-medium mb-2 text-center">
            Items in Cart : {cart.length}
          </h3>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li
                key={item.name}
                className="flex justify-between items-center border px-3 py-2 rounded"
              >
                <span>
                  {item.name} -- {item.price.toFixed(2)}$
                </span>
                <div className="flex items-center">
                  <button className="rounded-full w-8 h-8 bg-red-500 text-white">
                    -
                  </button>
                  <span className="mx-2">1</span>
                  <button className="rounded-full w-8 h-8 bg-green-500 text-white">
                    +
                  </button>
                </div>
                <button>
                  <Trash2 />
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <span className="font-bold text-lg">Total : 100</span>
          </div>

          <Button color="danger" className="mt-4 w-full">
            Clear Cart
          </Button>
        </div>
      ) : (
        <p className="text-gray-500 text-center mt-6">
          Your cart is empty. Add some items!
        </p>
      )}
    </div>
  );
};

export default CartApp;
