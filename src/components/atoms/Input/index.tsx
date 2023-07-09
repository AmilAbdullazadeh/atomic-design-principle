import React, { ReactNode, FC } from 'react';
import './Input.scss';

interface InputProps {
  setValue?: any;
  value?: string;
  placholder: string
}

const Input: FC<InputProps> = ({ setValue, value, placholder }) => {
  return (
  <input
      type="text"
      placeholder={placholder}
      value={value}
      className="form__input"
      onChange={e => setValue(e.target.value)}
  />
  );
};


export { Input };