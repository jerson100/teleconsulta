import React from "react";
import { Route } from "react-router-dom";

const RouteWithSubRoutes = (route) => {
  console.log(route);
  return (
    <Route
      path={route.path}
      exact={!!route.exact}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
  //   return (
  //     <Route
  //       path={route.path}
  //       render={(props) => <route.component {...props} routes={route.routes} />}
  //       //   exact={!!route.exact}
  //     />
  //   );
};

export default RouteWithSubRoutes;
