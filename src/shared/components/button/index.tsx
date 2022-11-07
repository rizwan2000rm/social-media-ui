import "./index.scss";

interface ButtonProps {
  text: string;
  isFullWidth?: boolean;
  className?: string;
  onClick?: any;
}

const Button = ({
  text,
  isFullWidth = false,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`button ${isFullWidth && "w-full"} ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
