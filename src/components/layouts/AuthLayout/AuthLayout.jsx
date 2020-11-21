import Layout from "antd/lib/layout/layout";
import React, { useEffect, useState } from "react";
import { Redirect, Switch } from "react-router-dom";
import RouteWithSubRoutes from "../../routers/RouteWithSubRoutes";
import bg1 from "../../../scenes/Auth/services/img/bg1.jpg";
import bg2 from "../../../scenes/Auth/services/img/bg2.jpg";
import bg3 from "../../../scenes/Auth/services/img/bg3.jpg";
import "./authLayout.scss";
import InformationHospital from "./components/InformationHospital/InformationHospital";

const AuthLayout = ({ routes }) => {
  return (
    <div className="auth-layout">
      <div
        className="auth-layout__left"
        style={{
          backgroundImage: `url(${bg2})`,
        }}
      >
        <InformationHospital />
      </div>
      <div className="auth-layout__right">
        <div className="auth-layout__right--cp-img-container">
          <div
            className="auth-layout__right--cp-img"
            style={{
              backgroundImage: `url(${bg1})`,
            }}
          ></div>
        </div>
        <div className="auth-layout__content">
          <Layout>
            <div className="auth-layout__form">
              <Switch>
                {routes.map((route, i) => (
                  <RouteWithSubRoutes key={i} {...route} />
                ))}
                <Redirect to="/auth/login" />
              </Switch>
            </div>
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
