import React from "react";
import className from "classnames";

// Define a type where each option is a separate type
type ButtonVariant = "primary" | "secondary" | "success" | "warning" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  outline?: boolean;
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  outline,
  rounded,
  ...rest
}) => {
  const colors = {
    primary: {
      bg: "bg-white",
      text: "text-black",
      border: "border-primary-500",
      hover: "hover:bg-gray-100"
    },
    secondary: {
      bg: "bg-secondary-500",
      text: "text-secondary-600",
      border: "border-secondary-600",
      hover: "hover:bg-secondary-600 hover:text-white"
    },
    success: {
      bg: "bg-success-500",
      text: "text-success-500",
      border: "border-success-400",
      hover: "hover:bg-success-600 hover:text-white"
    },
    warning: {
      bg: "bg-warning-600",
      text: "text-black",
      border: "border-warning-600",
      hover: "hover:bg-warning-800"
    },
    danger: {
      bg: "bg-red-500",
      text: "text-red-500",
      border: "border-red-500",
      hover: "hover:bg-red-600 hover:text-white"
    }
  };

  // Define the base classes and conditional classes
  const classes = className(
    "flex items-center justify-center px-8 py-4 font-semibold tracking-wide transition duration-300 ease-in-out", // base classes
    rest.className,
    {
      "rounded-full": rounded,
      "bg-white": outline // apply white background if outline is true
    },
    variant && colors[variant].border, // Apply border color based on variant
    variant && !outline && colors[variant].bg, // Apply background color if not outlined
    variant && (outline ? colors[variant].text : "text-black"),
    variant && colors[variant].hover // Apply hover effects
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
