import React from "react";
import { Route, Switch } from "react-router-dom";
import RouteWithSubRoutes from "../../routers/RouteWithSubRoutes";

const AuthLayout = ({ routes }) => {
  //   console.log(props);
  return (
    <div className="AuthLayout">
      <p>Estoy en Auth</p>
      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </Switch>
    </div>
  );
};

export default AuthLayout;
