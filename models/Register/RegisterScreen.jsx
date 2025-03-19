import React, {useState} from 'react';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

export default function RegisterScreen() {
  const [pageType, setPageType] = useState('Login');

  return (
    <>
      {pageType === 'Login' && <Login setPageType={setPageType} />}
      {pageType === 'Signup' && <Signup setPageType={setPageType} />}
    </>
  );
}
