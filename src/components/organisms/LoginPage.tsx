import React from 'react';
import './LoginPage.scss';
import Form from '../molecules/Form';

const LoginPage = () => {
  const handleLogin = (username: string, password: string) => {
    console.log(`Username: ${username}, Password: ${password}`);
  };

  return (
    <div className="login-page">
      <h1 className="login-page__title">Login</h1>
      <Form onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
