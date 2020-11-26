import React from "react";
import { Route, Switch } from "react-router-dom";
import { PUBLICROUTERS } from "../../configs/app.routes";
import NotFoundPage from "../../scenes/NotFoundPage/NotFoundPage";
import FullScreen from "../common/FullScreen/FullScreen";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

const PublicRouter = () => {
  return (
    <Switch>
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
  );
};

export default PublicRouter;
