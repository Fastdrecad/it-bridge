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
      bg: "bg-primary-500",
      text: "text-primary-600",
      border: "border-primary-500"
    },
    secondary: {
      bg: "bg-secondary-500",
      text: "text-secondary-600",
      border: "border-secondary-600"
    },
    success: {
      bg: "bg-success-500",
      text: "text-success-500",
      border: "border-success-400"
    },
    warning: {
      bg: "bg-warning-600",
      text: "text-warning-600",
      border: "border-warning-600"
    },
    danger: {
      bg: "bg-red-500",
      text: "text-red-500",
      border: "border-red-500"
    }
  };

  // Define the base classes and conditional classes
  const classes = className(
    "flex items-center px-8 py-4 font-semibold tracking-wide", // base classes
    rest.className,
    {
      "rounded-full": rounded,
      "bg-white": outline // apply white background if outline is true
    },
    variant && colors[variant].border, // Apply border color based on variant
    variant && !outline && colors[variant].bg, // Apply background color if not outlined
    variant && (outline ? colors[variant].text : "text-white")
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
