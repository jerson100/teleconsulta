import React from "react";
import {Route, Redirect} from "react-router-dom";

const PublicRouter = ({component}) => {
  return {idLogged ? <Route /> : <Redirect />}

};

export default PublicRouter;
