import React, {useState} from 'react';
import Login from './components/Login/Login';

export default function RegisterScreen() {
  const [pageType, setPageType] = useState('Login');

  return <>{pageType === 'Login' && <Login />}</>;
}
