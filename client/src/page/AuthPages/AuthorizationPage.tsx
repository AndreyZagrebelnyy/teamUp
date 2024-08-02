/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/provider/store/store';
import { authorization } from '../../entities/user/authSlice';
import './styles/auth.css';

function AuthorizationPage(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onHadleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    void dispatch(authorization({ email, password }));
    navigate('/');
  };

  return (
    <form onSubmit={onHadleSubmit}>
      <input
        type="login"
        name="login"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">login</button>
    </form>
  );
}

export default AuthorizationPage;
