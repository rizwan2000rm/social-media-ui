import React from "react";
import { VoidHandler } from "../../types";

import "./index.scss";

interface ModalProps {
  children: React.ReactNode;
  heading: string;
  subheading: string;
  isClosable?: boolean;
  className?: string;
  onClose?: VoidHandler;
}

const Modal = ({
  children,
  heading,
  subheading,
  isClosable = false,
  className,
  onClose,
  ...props
}: ModalProps) => {
  return (
    <div className={`modal ${className}`} {...props}>
      <span className="flex align-center">
        {heading && <h3 className="heading mx-auto">{heading}</h3>}
        {isClosable && (
          <img
            onClick={onClose}
            className="close-icon"
            src="/cross.svg"
            alt="close-modal"
          />
        )}
      </span>
      {subheading && <h4 className="sub-heading mx-auto">{subheading}</h4>}
      {children}
    </div>
  );
};

export default Modal;
