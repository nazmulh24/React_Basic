import React from "react";
import Button from "../components/Button.jsx";
import { useForm } from "react-hook-form";

const CartApp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-1/3 mx-auto p-6 border rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        🛒 Shopping Cart
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
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

      {/* {cart.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-medium mb-2">
            Items in Cart ({cart.length}):
          </h3>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border px-3 py-2 rounded"
              >
                <span>
                  {item.name} x {item.quantity}
                </span>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleClear}
            className="mt-4 text-sm text-gray-600 hover:text-red-500 hover:underline"
          >
            Clear Cart
          </button>
        </div>
      )} */}
    </div>
  );
};

export default CartApp;
