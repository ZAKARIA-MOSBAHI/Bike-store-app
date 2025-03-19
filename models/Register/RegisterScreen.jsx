import React, {useEffect, useState} from 'react';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

export default function RegisterScreen() {
  const [pageType, setPageType] = useState('Login');
  useEffect(() => {
    console.log(pageType);
  }, [pageType]);

  return (
    <>
      {pageType === 'Login' && <Login setPageType={setPageType} />}
      {pageType === 'Signup' && <Signup setPageType={setPageType} />}
    </>
  );
}
