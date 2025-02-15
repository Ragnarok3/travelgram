import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const LoginButton = () => {
  const { login } = useContext(AuthContext);

  return (
    <button onClick={login}>Login with Microsoft</button>
  );
};

export default LoginButton;