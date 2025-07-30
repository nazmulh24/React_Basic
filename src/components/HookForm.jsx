import { useForm } from "react-hook-form";
import Button from "./Button";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

//   console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="w-1/3 mx-auto border p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block mb-1 text-gray-900 font-bold">
            Name :
          </label>
          <input
            {...register("name", {
              required: true,
              maxLength: 20,
            })}
            id="name"
            type="text"
            className="px-3 py-2 border rounded-lg w-full bg-gray-100 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your name here..."
          />
          {errors.name?.type === "required" && (
            <span className="text-red-500 text-sm">Name is required</span>
          )}
          {errors.name?.type === "maxLength" && (
            <span className="text-red-500 text-sm">
              Name must be at most 20 characters
            </span>
          )}
        </div>

        {/* Age */}
        <div className="mb-4">
          <label htmlFor="age" className="block mb-1 text-gray-900 font-bold">
            Age :
          </label>
          <input
            {...register("age", {
              valueAsNumber: true,
              required: true,
              min: 18,
            })}
            id="age"
            type="number"
            className="px-3 py-2 border rounded-lg w-full bg-gray-100 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your age here..."
          />
          {errors.age?.type === "required" && (
            <span className="text-red-500 text-sm">Age is required</span>
          )}
          {errors.age?.type === "min" && (
            <span className="text-red-500 text-sm">
              Age must be at least 18
            </span>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-1 text-gray-900 font-bold">
            Email :
          </label>
          <input
            {...register("email", { required: true })}
            id="email"
            type="email"
            className="px-3 py-2 border rounded-lg w-full bg-gray-100 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email here..."
          />
          {errors.email && (
            <span className="text-red-500 text-sm">Email is required</span>
          )}
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block mb-1 text-gray-900 font-bold"
          >
            Password :
          </label>
          <input
            {...register("password", { required: true })}
            id="password"
            type="password"
            className="px-3 py-2 border rounded-lg w-full bg-gray-100 text-gray-900 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password here..."
          />
          {errors.password && (
            <span className="text-red-500 text-sm">Password is required</span>
          )}
        </div>

        {/* Checkbox */}
        <div className="flex items-center mb-4 ml-2">
          <input
            type="checkbox"
            className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            id="terms"
          />
          <label htmlFor="terms" className="text-gray-900 font-bold">
            Show/Hide password
          </label>
        </div>

        {/* Submit Button */}
        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default HookForm;
