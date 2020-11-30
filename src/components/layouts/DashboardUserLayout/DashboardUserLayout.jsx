import React, { useCallback, useState } from "react";
import { Switch } from "react-router-dom";
import { Layout } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

import "./dashboardUserLayout.scss";
import RouteWithSubRoutes from "../../routers/RouteWithSubRoutes";

import { Route } from "react-router-dom";
import useMatchMedia from "../../../hooks/useMatchMedia";
import NotFoundPage from "../../../scenes/NotFoundPage/NotFoundPage";
import SiderDashBoardLayout from "./components/SiderDashBoardLayout/SiderDashBoardLayout";

const { Header, Content } = Layout;

const DashboardUserLayout = ({ routes, location }) => {
  const [collapsed, setcollapsed] = useState(true);
  const match1200px = useMatchMedia("(min-width: 1200px)");

  const toggle = useCallback(() => {
    setcollapsed((c) => !c);
  }, [setcollapsed]);

  const handleDesktop = useCallback(() => {
    setcollapsed(true);
  }, [setcollapsed]);

  return (
    <div className="dashboard-user-layout">
      <Layout style={{ minHeight: "100vh" }}>
        <SiderDashBoardLayout
          match1200px={match1200px}
          pathname={location.pathname}
          collapsed={collapsed}
          handleDesktop={handleDesktop}
          routes={routes}
        />
        <Layout
          className="site-layout"
          style={{
            transition: "margin-left 200ms",
            minWidth: match1200px ? "initial" : "100%",
            marginLeft: match1200px
              ? collapsed
                ? 97
                : 300
              : collapsed
              ? 0
              : 200,
          }}
        >
          <Header
            className="dashboard-user-layout__header site-layout-background"
            style={{ padding: 0 }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background dashboard-user-layout__main"
            style={{ margin: "24px 16px 0", overflow: "initial", padding: 24 }}
          >
            <Switch>
              {routes.map((r, i) => (
                <RouteWithSubRoutes key={i} {...r} />
              ))}
              <Route
                render={() => (
                  <NotFoundPage
                    url="/dashboard"
                    title="Regresar al dashboard"
                  />
                )}
              />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardUserLayout;
