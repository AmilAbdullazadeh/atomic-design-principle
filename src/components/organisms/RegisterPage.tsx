import React from 'react';
import './RegisterPage.scss';
import Form from '../molecules/Form';

const RegsterPage = () => {
  const handleRegister = (username: string, password: string) => {
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="register-page">
      <h1 className="register-page__title">Register</h1>
      <Form onSubmit={handleRegister} />
    </div>
  );
};

export default RegsterPage;
