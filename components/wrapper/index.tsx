import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <div style={{ padding: "0px 20px 0px 20px" }} className={className}>
      {children}
    </div>
  );
};

export default Wrapper;
