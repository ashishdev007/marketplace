import React from 'react';
import { TheContent, Navbar } from './index';
import { Switch, Route } from 'react-router-dom';

const Login = React.lazy(() => import('../views/login/Login'));

const TheLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <TheContent />
      </div>
    </div>
  );
};

export default TheLayout;
