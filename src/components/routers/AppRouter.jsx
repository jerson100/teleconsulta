import React from "react";
import { BrowserRouter as Router, Redirect, Switch } from "react-router-dom";
import { PUBLICROUTERS } from "../../configs/app.routes";
// import { PUBLICROUTERS } from "../../configs/app.routes";
import PublicRouter from "./PublicRouter";
import RouteWithSubRoutes from "./RouteWithSubRoutes";
// import RouteWithSubRoutes from "./RouteWithSubRoutes";

const AppRouter = () => {
  console.log(PUBLICROUTERS);
  return (
    <Router>
      <Switch>
        {PUBLICROUTERS.map((r, index) => (
          <RouteWithSubRoutes key={index} {...r} />
        ))}
        {/* <Redirect to="/auth/register" /> */}
        {/* <PrivateRouter /> */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
