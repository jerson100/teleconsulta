import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import RouteWithSubRoutes from "../../routers/RouteWithSubRoutes";
import NotFoundPage from "../../../scenes/NotFoundPage/NotFoundPage";
import HomePageLayoutHeader from "./HomePageLayoutHeader/HomePageLayoutHeader";
import "./homePageLayout.scss";

const { Footer, Content } = Layout;

const HomePageLayout = ({ routes }) => {
  return (
    <div className="home-page-layout">
      <Layout className="home-page-layout__section">
        <HomePageLayoutHeader routes={routes} />
        <Content
          style={{ marginTop: "64px" }}
          className="home-page-layout__content"
        >
          <Switch>
            {routes.map((r, i) => (
              <RouteWithSubRoutes {...r} key={i} />
            ))}
            <Route
              render={() => (
                <NotFoundPage title="La página solicitada no existe" url="/" />
              )}
            />
          </Switch>
        </Content>
        <Footer className="home-page-layout__footer">
          Copyright ©2020 All rights reserved | This page is made with by{" "}
          <HeartTwoTone twoToneColor="#eb2f96" />
          Jerson Ramírez Ortiz <HeartTwoTone twoToneColor="#eb2f96" />
        </Footer>
      </Layout>
    </div>
  );
};

export default HomePageLayout;
