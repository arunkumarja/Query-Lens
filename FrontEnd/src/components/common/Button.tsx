

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
}

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseStyle =
    "px-4 py-2 rounded-lg font-medium transition flex items-center gap-2";

  const variants = {
    primary: "bg-violet-600 text-white hover:bg-violet-700",
    secondary: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;