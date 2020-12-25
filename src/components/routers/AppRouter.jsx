import React from "react";
import {
  BrowserRouter as Router,
  //   Redirect,
  Route,
  Switch,
} from "react-router-dom";
// import { PUBLICROUTERS } from "../../configs/app.routes";
// import NotFoundPage from "../../scenes/NotFoundPage/NotFoundPage";
import BackTop from "../common/BackTop";
// import FullScreen from "../common/FullScreen/FullScreen";
// import { PUBLICROUTERS } from "../../configs/app.routes";
import AuthRouter from "./AuthRouter";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
// import { PUBLICROUTERS } from "../../configs/app.routes";
// import PublicRouter from "./PublicRouter";
// import RouteWithSubRoutes from "./RouteWithSubRoutes";
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
        <Route path="/">
          <PublicRouter />
        </Route>
      </Switch>
      <BackTop />
    </Router>
  );
};

export default AppRouter;
