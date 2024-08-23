import classNames from "classnames";

type ButtonVariant = "primary" | "secondary" | "success" | "warning" | "danger";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  outline?: boolean;
  rounded?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  outline = false,
  rounded = false,
  ...rest
}) => {
  const colors = {
    primary: {
      base: "bg-white text-black border-white border-2 border-white active:border-2 active:border-black",
      hover:
        "hover:bg-gradient-to-r hover:from-[#15103E] hover:to-[#A0C943] hover:text-white hover:border-white"
    },
    secondary: {
      base: "bg-secondary-500 text-white border-secondary-600",
      hover: "hover:bg-secondary-600 hover:text-white"
    },
    success: {
      base: "bg-success-500 text-white border-success-400",
      hover: "hover:bg-success-600 hover:text-white"
    },
    warning: {
      base: "bg-warning-600  border-warning-600",
      hover: "hover:bg-warning-800 hover:text-white"
    },
    danger: {
      base: "bg-red-500 text-white border-red-500",
      hover: "hover:bg-red-600 hover:text-white"
    }
  };

  const classes = classNames(
    "flex items-center justify-center px-14 py-4 font-semibold tracking-wide transition-all duration-300 ease-in-out", // base classes
    rounded ? "rounded-full" : "rounded-none", // Apply rounded corners
    outline ? "bg-transparent border-2" : colors[variant].base, // Apply border color based on variant and outline
    colors[variant].hover, // Apply hover effects
    rest.className // Apply additional classes passed via props
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;
