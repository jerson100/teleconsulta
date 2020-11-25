import React from "react";
import {
  BrowserRouter as Router,
  //   Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { PUBLICROUTERS } from "../../configs/app.routes";
import NotFoundPage from "../../scenes/NotFoundPage/NotFoundPage";
import FullScreen from "../common/FullScreen/FullScreen";
// import { PUBLICROUTERS } from "../../configs/app.routes";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";
// import { PUBLICROUTERS } from "../../configs/app.routes";
// import PublicRouter from "./PublicRouter";
import RouteWithSubRoutes from "./RouteWithSubRoutes";
// import RouteWithSubRoutes from "./RouteWithSubRoutes";
// import RouteWithSubRoutes from "./RouteWithSubRoutes";

const AppRouter = () => {
  //   console.log(PUBLICROUTERS);
  return (
    <Router>
      <Switch>
        <Route path="/auth">
          <AuthRouter />
        </Route>
        <Route path="/dashboard">
          <PrivateRouter />
        </Route>
        {PUBLICROUTERS.map((r, index) => (
          <RouteWithSubRoutes key={index} {...r} />
        ))}
        <Route
          render={() => (
            <FullScreen>
              <NotFoundPage title="Regresar" url="/" />
            </FullScreen>
          )}
        />
      </Switch>
    </Router>
  );
};

export default AppRouter;
