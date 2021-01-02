import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button, Col, Menu, Row } from "antd";
import Container from "../../../common/Container/Container";
import { MenuFoldOutlined } from "@ant-design/icons";
import "./homePageLayoutHeader.scss";
import FullDesktopBg from "../../../common/FullDesktopBg/FullDesktopBg";
import { Link } from "react-router-dom";
import useIndexMenuItemLocation from "../../../../hooks/useIndexMenuItemLocation";

// const { Header } = Layout;

const variants = {
  visible: {
    background: "#fff",
    boxShadow: "0 1px 1px 1pxrgba(169, 169, 169, 0.11)",
    height: "60px",
    // transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
  initial: {
    background: "rgba(255,255,255,0)",
    boxShadow: "0 1px 1px 1px rgba(169, 169,169, 0)",
    height: "100px",
    // transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const HomePageLayoutHeader = ({ routes, location }) => {
  const [showMenu, setshowMenu] = useState(false);
  const [headerVariants, setheaderVariants] = useState("");
  const selectedIndexMenuItem = useIndexMenuItemLocation(
    routes,
    location.pathname,
    ""
  );

  useEffect(() => {
    const scroll = (e) => {
      if (window.scrollY > 100) {
        setheaderVariants("visible");
        // });
      } else {
        setheaderVariants("initial");
        // setheaderVariants("hidden");
      }
    };
    scroll();
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  const handleShowMenu = useCallback(() => {
    setshowMenu((s) => !s);
  }, []);

  const handleSelectMenuItem = useCallback(() => {
    setshowMenu(false);
  }, []);

  return (
    <motion.header
      className={`home-page-layout-header ${
        headerVariants === "visible" ? "home-page-layout-header--active" : ""
      }`}
      animate={headerVariants}
      variants={variants}
    >
      <Container>
        <Row>
          <Logo />
          <Nav
            handleShowMenu={handleShowMenu}
            selectedIndexMenuItem={selectedIndexMenuItem}
            showMenu={showMenu}
            handleSelectMenuItem={handleSelectMenuItem}
            routes={routes}
          />
        </Row>
        <FullDesktopBg
          show={showMenu}
          handleClick={handleSelectMenuItem}
          addOverFlowBody
        />
      </Container>
    </motion.header>
  );
};

const Logo = React.memo(() => {
  return (
    <Col flex="100px">
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ delay: 1.5, type: "spring", stiffness: 500 }}
        className="home-page-layout-header__logo"
      >
        Logo
      </motion.div>
    </Col>
  );
});

const Nav = React.memo(
  ({
    handleShowMenu,
    selectedIndexMenuItem,
    showMenu,
    handleSelectMenuItem,
    routes,
  }) => {
    return (
      <Col flex="auto">
        <div className="home-page-layout-header__nav">
          <div className="home-page-layout-header__toogle">
            <Button type="primary" onClick={handleShowMenu}>
              <MenuFoldOutlined />
            </Button>
          </div>
          <Menu
            theme="light"
            mode="vertical"
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
              <Button type="danger">
                <Link to="/auth/login">Ingresar</Link>
              </Button>
            </Menu.Item>
          </Menu>
        </div>
      </Col>
    );
  }
);
export default HomePageLayoutHeader;
