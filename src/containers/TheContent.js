import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';

const TheContent = () => {
  return (
    <Switch>
      {routes.map((route, id) => {
        return (
          route.component && (
            <Route
              key={id}
              path={route.path}
              exact={route.exact}
              name={route.name}
              //   render={(props) => <route.component {...props} />}
              component={route.component}
            />
          )
        );
      })}
    </Switch>
  );
};

export default TheContent;
// export default React.memo(TheContent);
