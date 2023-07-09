import React, { ReactNode, FC } from 'react';
import './Button.scss';

interface ButtonProps {
  onClick: any;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
};


export { Button };