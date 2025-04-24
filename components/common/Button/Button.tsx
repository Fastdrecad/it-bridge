import classNames from "classnames";
import "./Button.css";

type ButtonVariant = "primary" | "secondary" | "success" | "warning" | "danger";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    Pick<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  outline?: boolean;
  rounded?: boolean;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  outline = false,
  rounded = false,
  disabled = false,
  loading = false,
  className,
  onClick,
  href,
  ...rest
}) => {
  const colors = {
    primary: {
      base: "bg-white text-black border-white border-2 border-white active:border-2 active:border-black",
      hover:
        "hover:bg-gradient-to-r hover:from-[#15103E] hover:to-[#A0C943] hover:text-white hover:border-white"
    },
    secondary: {
      base: "btn btn-animated btn-secondary whitespace-nowrap",
      hover: "",
      active: ""
    },
    success: {
      base: "btn btn-animated btn-success border-white border-2 border-white active:border-2 active:border-black", //
      hover:
        "hover:bg-gradient-to-r hover:from-[#15103E] hover:to-[#A0C943] hover:text-white hover:border-white",
      active: ""
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
    "flex items-center justify-center px-14 py-4 font-semibold tracking-wide", // base classes
    rounded ? "rounded-full" : "rounded-none", // Apply rounded corners
    outline ? "bg-transparent border-2" : colors[variant].base, // Apply border color based on variant and outline
    colors[variant].hover, // Apply hover effects
    className, // Custom classNames passed in via props
    { "opacity-50 cursor-not-allowed pointer-events-none": disabled || loading } // Apply disabled styles
  );

  const content = loading ? (
    <div className="flex items-center justify-center">
      <div className="spinner-mini mr-2" />
      {typeof children === "string" ? "Processing..." : children}
    </div>
  ) : (
    children
  );

  if (href && !disabled) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button
      {...rest}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading}
      type={rest.type || "submit"}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="spinner-mini mr-2" />
          {typeof children === "string" ? "Processing..." : children}
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
