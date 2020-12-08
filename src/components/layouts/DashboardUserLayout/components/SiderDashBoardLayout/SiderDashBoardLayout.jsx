import React, { useEffect } from "react";
import { Layout } from "antd";
import AvatarUser from "../AvatarUser";
import FullDesktopBg from "../../../../common/FullDesktopBg/FullDesktopBg";
import useIndexMenuItemLocation from "../../../../../hooks/useIndexMenuItemLocation";
import MenuSiderDashBoardLayout from "./components/MenuSiderDashBoardLayout/MenuSiderDashBoardLayout";
const { Sider } = Layout;

const SiderDashBoardLayout = ({
  match1200px,
  collapsed,
  pathname,
  handleDesktop,
  routes,
}) => {
  const selectedIndexMenuItem = useIndexMenuItemLocation(routes, pathname);
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = !collapsed && !match1200px ? "hidden" : "";
    return () => {
      body.style = "";
    };
  }, [collapsed, match1200px]);
  return (
    <>
      {!match1200px && (
        <FullDesktopBg
          addOverFlowBody
          handleClick={handleDesktop}
          show={!collapsed}
        />
      )}
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
        <MenuSiderDashBoardLayout
          selectedIndexMenuItem={selectedIndexMenuItem}
          match1200px={match1200px}
          handleDesktop={handleDesktop}
          routes={routes}
        />
      </Sider>
    </>
  );
};

export default SiderDashBoardLayout;