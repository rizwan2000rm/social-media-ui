import React from "react";
import "./index.scss";

interface CardProps {
  children: React.ReactNode;
  heading?: string;
  subheading?: string;
  className?: string;
}

const Card = ({
  children,
  heading,
  subheading,
  className,
  ...props
}: CardProps) => {
  return (
    <div className={`card ${className}`} {...props}>
      {heading && <h3 className="heading mx-auto">{heading}</h3>}
      {subheading && <h4 className="sub-heading mx-auto">{subheading}</h4>}
      {children}
    </div>
  );
};

export default Card;
