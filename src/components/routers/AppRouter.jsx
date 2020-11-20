import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PUBLICROUTERS } from "../../configs/app.routes";
// import { PUBLICROUTERS } from "../../configs/app.routes";
import PublicRouter from "./PublicRouter";
// import RouteWithSubRoutes from "./RouteWithSubRoutes";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <PublicRouter />

        {/* <PrivateRouter /> */}
      </Switch>
    </Router>
  );
};

export default AppRouter;
