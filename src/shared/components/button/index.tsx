import "./index.scss";

interface ButtonProps {
  text: string;
  isFullWidth?: boolean;
  className?: string;
}

const Button = ({ text, isFullWidth = false, className }: ButtonProps) => {
  return (
    <button className={`button ${isFullWidth && "w-full"} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
