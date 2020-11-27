import React, { useEffect, useMemo, useState } from "react";
import { Switch } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import "./dashboardUserLayout.scss";
import AvatarUser from "./components/AvatarUser";
import RouteWithSubRoutes from "../../routers/RouteWithSubRoutes";

import { Link, Route } from "react-router-dom";
import useMatchMedia from "../../../hooks/useMatchMedia";
import NotFoundPage from "../../../scenes/NotFoundPage/NotFoundPage";
import FullDesktopBg from "../../common/FullDesktopBg/FullDesktopBg";

const { Header, Sider, Content } = Layout;

const DashboardUserLayout = ({ routes, location }) => {
  const [collapsed, setcollapsed] = useState(true);

  const match1200px = useMatchMedia("(min-width: 1200px)");

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = !collapsed && !match1200px ? "hidden" : "";
    return () => {
      body.style = "";
    };
  }, [collapsed, match1200px]);

  const toggle = () => {
    setcollapsed(!collapsed);
  };

  const handleDesktop = () => {
    setcollapsed(true);
  };

  const selectedMenu = useMemo(() => {
    const index = routes.findIndex((r) => r.path === location.pathname);
    return "" + (index >= 0 ? index : 0);
  }, [location]);

  return (
    <div className="dashboard-user-layout">
      {!match1200px && (
        <FullDesktopBg
          addOverFlowBody
          handleClick={handleDesktop}
          show={!collapsed}
        />
      )}

      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          style={{
            overflowY: "auto",
            overflowX: "hidden",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            zIndex: "10000",
            minWidth: "200px",
            transform: match1200px
              ? ""
              : `translateX(${collapsed ? "-100%" : "0%"})`,
          }}
          trigger={null}
          width={match1200px ? 300 : 200}
          collapsed={match1200px && collapsed}
          collapsedWidth={98}
        >
          <div className="dashboard-user-layout__avatar">
            <AvatarUser
              name="Jerson Ramírez Ortiz"
              size={match1200px && collapsed ? 30 : 100}
            />
          </div>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[selectedMenu]}
            style={{ width: "100%" }}
            onSelect={handleDesktop}
          >
            {routes.map((r, i) => (
              <Menu.Item key={i} icon={r.icon}>
                <Link to={r.path}>{r.title}</Link>
              </Menu.Item>
            ))}
            <Menu.Item key="logout" icon={<LogoutOutlined />}>
              <Link to="/auth/login">Salir</Link>
            </Menu.Item>
          </Menu>
        </Sider>
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
