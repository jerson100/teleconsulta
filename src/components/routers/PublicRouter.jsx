import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { PUBLICROUTERS } from "../../configs/app.routes";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

const PublicRouter = () => {
  //   console.log("public router");
  //   const isLogued = false;
  return (
    <Switch>
      {PUBLICROUTERS.map((r, index) => (
        <RouteWithSubRoutes key={index} {...r} />
      ))}
    </Switch>
  );
};

export default PublicRouter;
