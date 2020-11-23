import React from "react";
import { AUTHROUTERS } from "../../configs/app.routes";
import RouteWithSubRoutes from "./RouteWithSubRoutes";

const AuthRouter = () => {
  //   console.log("public router");
  //   const isLogued = false;
  return (
    <>
      {AUTHROUTERS.map((r, index) => (
        <RouteWithSubRoutes key={index} {...r} />
      ))}
    </>
  );
};

export default AuthRouter;
