import React, { FC, useState, FormEvent } from 'react';
import './Form.scss';
import { Button } from '../atoms/Button';
import {Input} from "../atoms/Input";

interface FormProps {
  onSubmit: (username: string, password: string) => void;
}

const Form: FC<FormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <Input setValue={setUsername} value={username} />
        <Input setValue={setPassword} value={password} />
        <Button onClick={handleSubmit}>Submit</Button>
      </form>
    </div>
  );
};

export default Form;
