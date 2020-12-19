import { Menu } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import React from "react";

const MenuSiderDashBoardLayout = ({
  selectedIndexMenuItem,
  match1200px,
  handleDesktop,
  routes,
}) => {
  return (
    <>
      <Menu
        theme="dark"
        mode="inline"
        //   defaultSelectedKeys={["0"]}
        selectedKeys={selectedIndexMenuItem}
        //   style={{ width: "100%" }}
        onSelect={match1200px ? () => {} : handleDesktop}
        style={{ width: "100%" }}
      >
        {routes.map(
          (r, i) =>
            r.isViewMenu && (
              <Menu.Item key={i} icon={r.icon}>
                <Link to={r.path}>{r.title}</Link>
              </Menu.Item>
            )
        )}
        <Menu.Item key="logout" icon={<LogoutOutlined />}>
          <Link to="/auth/login">Salir</Link>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default React.memo(MenuSiderDashBoardLayout);
