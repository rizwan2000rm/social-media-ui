import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import "./index.scss";

interface InputProps {
  labelText: string;
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  id: string;
  type: HTMLInputTypeAttribute;
}

const Input = ({
  labelText,
  placeholder,
  onChange,
  id,
  type,
  ...props
}: InputProps) => {
  return (
    <span className="form-item">
      <label htmlFor={id}>{labelText}</label>
      <input
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        {...props}
      />
    </span>
  );
};

export default Input;
