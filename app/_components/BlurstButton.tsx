import classnames from "classnames";

interface BlurstButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: string;
}

const BlurstButton: React.FC<BlurstButtonProps> = ({
  children,
  color = "bg-warning-600",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={classnames(
        "flex items-center justify-center px-8 py-4 font-semibold tracking-wide duration-100 ease-linear rounded-full select-none relative",
        'before:content-[""] before:w-full before:h-full before:absolute before:rounded-full before:z-[-1] before:top-0 before:left-0 before:transition-all before:duration-500 before:ease-in-out before:opacity-0 before:scale-150 hover:before:opacity-100 hover:before:scale-100 shadow-[inset_0_4px_6px_-1px_rgba(0,0,0,0.1),_0_2px_4px_-2px_rgba(0,0,0,0.1)] active:shadow-[inset_0_0_0_4px_rgba(4,59,63,0.42)] transition-all',
        color,
        `before:${color}`,
        rest.className
      )}
    >
      {children}
    </button>
  );
};

export default BlurstButton;
