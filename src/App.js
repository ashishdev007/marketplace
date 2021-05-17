import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

const TheLayout = React.lazy(() => import('./containers/TheLayout'));
const Home = React.lazy(() => import('./views/home/Home'));

const loading = (
  <div class="ui segment">
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
