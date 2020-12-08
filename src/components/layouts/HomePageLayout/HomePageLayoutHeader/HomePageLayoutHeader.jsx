import React, { useState } from "react";
import { Button, Col, Layout, Menu, Row } from "antd";
import Container from "../../../common/Container/Container";
import { MenuFoldOutlined } from "@ant-design/icons";
import "./homePageLayoutHeader.scss";
import FullDesktopBg from "../../../common/FullDesktopBg/FullDesktopBg";
import { Link } from "react-router-dom";
import useIndexMenuItemLocation from "../../../../hooks/useIndexMenuItemLocation";

const { Header } = Layout;

const HomePageLayoutHeader = ({ routes, location }) => {
  const [showMenu, setshowMenu] = useState(false);
  const selectedIndexMenuItem = useIndexMenuItemLocation(
    routes,
    location.pathname,
    ""
  );
  const handleShowMenu = () => {
    setshowMenu(!showMenu);
  };
  const handleDesktopBg = () => {
    setshowMenu(false);
  };
  const handleSelectMenuItem = () => {
    setshowMenu(false);
  };
  return (
    <Header className="home-page-layout-header">
      <Container>
        <Row>
          <Col flex="100px">
            <div className="home-page-layout-header__logo">Logo</div>
          </Col>
          <Col flex="auto">
            <div className="home-page-layout-header__nav">
              <div className="home-page-layout-header__toogle">
                <Button type="primary" onClick={handleShowMenu}>
                  <MenuFoldOutlined />
                </Button>
              </div>
              <Menu
                theme="dark"
                mode="vertical"
                // defaultSelectedKeys={["0"]}
                selectedKeys={selectedIndexMenuItem}
                className={`home-page-layout-header__menu ${
                  showMenu ? "home-page-layout-header__menu--active" : ""
                }`}
                onSelect={handleSelectMenuItem}
              >
                {routes.map(
                  (r, i) =>
                    r.filter && (
                      <Menu.Item key={i}>
                        <Link to={r.path}>{r.title}</Link>
                      </Menu.Item>
                    )
                )}
                <Menu.Item key="5">
                  <Link to="/auth/login">Ingresar</Link>
                </Menu.Item>
                <Menu.Item key="6">
                  <Link to="/auth/register">Registrarme</Link>
                </Menu.Item>
              </Menu>
            </div>
          </Col>
        </Row>
        <FullDesktopBg
          show={showMenu}
          handleClick={handleDesktopBg}
          addOverFlowBody
        />
      </Container>
    </Header>
  );
};

export default HomePageLayoutHeader;
