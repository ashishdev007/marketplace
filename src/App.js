import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
// import Signup from ';

const TheLayout = React.lazy(() => import('./containers/TheLayout'));
const Login = React.lazy(() => import('./views/login/Login'));
const Signup = React.lazy(() => import('./views/signup/Signup'));

const loading = (
  <div class="ui segment full-screen">
    <div class="ui active inverted dimmer">
      <div class="ui text loader">Loading</div>
    </div>
    <p></p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={loading}>
        <Switch>
          <Route path="/login" exact name="Login" component={Login} />
          <Route path="/signup" name="Signup" component={Signup} />
          <Route
            path="/"
            name="Home"
            render={(props) => <TheLayout {...props} />}
          />
        </Switch>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
