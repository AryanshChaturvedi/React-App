import React from 'react';
import LoginForm from './LoginForm';
import '../Styles.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
