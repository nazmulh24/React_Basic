import React from "react";

const Button = ({
  onClick,
  children,
  color = "primary",
  className = "",
  type = "button",
}) => {
  const buttonColors = {
    primary: "bg-blue-500 hover:bg-blue-600",
    success: "bg-green-500 hover:bg-green-600",
    danger: "bg-red-500 hover:bg-red-600",
    info: "bg-teal-500 hover:bg-teal-600",
    warning: "bg-orange-500 hover:bg-orange-600",
    alert: "bg-yellow-500 hover:bg-yellow-600",
  };

  const baseClass = `${buttonColors[color]} text-white font-bold py-2 px-4 rounded-lg shadow`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClass} ${className}`}
    >
      {children || "Click Me"}
    </button>
  );
};

export default Button;
