import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PRIVATEROUTERS } from "../../configs/app.routes";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

const PrivateRouter = (props) => {
  const logued = true;
  //   console.log("private router.");
  return logued ? (
    <>
      {PRIVATEROUTERS.map((router, i) => (
        <RouteWithSubRoutes {...props} {...router} key={i} />
      ))}
    </>
  ) : (
    <Redirect to="/auth/login" />
  );
};

export default PrivateRouter;
