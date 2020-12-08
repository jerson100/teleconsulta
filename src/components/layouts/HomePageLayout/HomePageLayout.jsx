import React from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import RouteWithSubRoutes from "../../routers/RouteWithSubRoutes";
import NotFoundPage from "../../../scenes/NotFoundPage/NotFoundPage";
import HomePageLayoutHeader from "./HomePageLayoutHeader/HomePageLayoutHeader";
import HomePageLayoutWrapper from "./HomePageLayoutWrapper/HomePageLayoutWrapper";
import "./homePageLayout.scss";
import FooterHomePageLayout from "./FooterHomePageLayout/FooterHomePageLayout";

const { Content } = Layout;

const HomePageLayout = ({ routes, location }) => {
  return (
    <div className="home-page-layout">
      <Layout className="home-page-layout__section">
        <HomePageLayoutHeader routes={routes} location={location} />
        <Content
          style={{ marginTop: "64px" }}
          className="home-page-layout__content"
        >
          <Switch>
            {routes.map((r, i) => (
              <RouteWithSubRoutes
                {...r}
                key={i}
                wrapper={HomePageLayoutWrapper}
              />
            ))}
            <Route
              render={() => (
                <NotFoundPage title="La página solicitada no existe" url="/" />
              )}
            />
          </Switch>
        </Content>
        <FooterHomePageLayout />
      </Layout>
    </div>
  );
};

export default HomePageLayout;
