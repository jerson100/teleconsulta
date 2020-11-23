import React, { useState } from "react";
import { Layout, Menu, Avatar, Image } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import "./dashboardUserLayout.scss";
import AvatarUser from "./components/AvatarUser";
import RouteWithSubRoutes from "../../routers/RouteWithSubRoutes";

import { PrivateRouters } from "../../../configs/app.routes";
import { Link } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const DashboardUserLayout = ({ routes }) => {
  console.log(routes);
  const [collapsed, setcollapsed] = useState(false);

  const toggle = () => {
    setcollapsed(!collapsed);
  };

  return (
    <div className="dashboard-user-layout">
      <Layout>
        <Sider
          style={{
            height: "100vh",
            overflow: "auto",
          }}
          trigger={null}
          collapsible
          collapsed={collapsed}
          collapsedWidth={97}
          width={300}
        >
          <div className="dashboard-user-layout__avatar">
            <AvatarUser
              name="Jerson Ramírez Ortiz"
              size={collapsed ? 32 : 100}
            />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["0"]}>
            {routes.map((r, i) => (
              <Menu.Item key={i} icon={<UserOutlined />}>
                <Link to={r.path}>{r.title}</Link>
              </Menu.Item>
            ))}
            <Menu.Item key="logout" icon={<UserOutlined />}>
              <Link to="/auth/login">Logout</Link>
            </Menu.Item>
            {/* <Menu.Item key="1" icon={<UserOutlined />}>
              nav 1
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item> */}
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
              }
            )}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
            }}
          >
            {routes.map((r, i) => (
              <RouteWithSubRoutes key={i} {...r} />
            ))}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default DashboardUserLayout;
