import React, { ReactNode } from "react";

interface Properties {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger" | "success"; //catches faulty strings
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Properties) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
