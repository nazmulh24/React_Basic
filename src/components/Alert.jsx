import { CircleX } from "lucide-react";

const Alert = ({
  message = "This is an alert message!",
  type = "info",
  onClose,
}) => {
  const alertTypes = {
    info: "bg-blue-200 text-blue-500 border-blue-500",
    success: "bg-green-200 text-green-500 border-green-500",
    warning: "bg-yellow-200 text-yellow-500 border-yellow-500",
    danger: "bg-red-200 text-red-500 border-red-500",
  };

  return (
    <div
      className={`flex justify-between items-center gap-10 px-4 py-2 w-fit rounded-lg ${alertTypes[type]} `}
    >
      <span>{message}</span>
      <button
        onClick={onClose}
        className="text-lg text-red-500 transition-all duration-300 transform hover:scale-125"
      >
        ✘
        {/* <CircleX color="red" /> */}
      </button>
    </div>
  );
};

export default Alert;
