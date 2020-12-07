import React from "react";
import { Route } from "react-router-dom";

const RouteWithSubRoutes = (route) => {
  //   console.log(route);
  return (
    <Route
      path={route.path}
      exact={!!route.exact}
      render={
        (props) =>
          // pass the sub-routes down to keep nesting
          route.viewTitle ? (
            <route.wrapper title={route.title}>
              <route.component {...props} routes={route.routes} />
            </route.wrapper>
          ) : (
            <route.component {...props} routes={route.routes} />
          )
        // <route.component {...props} routes={route.routes} />
      }
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
