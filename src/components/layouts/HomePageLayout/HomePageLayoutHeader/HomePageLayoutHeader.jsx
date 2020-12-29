import React, { useEffect, useState } from "react";
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
  hidden: {
    x: "100%",
    background: "transparent",
  },
  visible: {
    x: "0%",
    background: "#fff",
    // scale: 1,
  },
  initial: {
    x: "0%",
    background: "transparent",
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
      if (window.scrollY <= 64) {
        setheaderVariants("initial");
      } else if (window.scrollY > 200) {
        setheaderVariants("visible");
        // });
      } else {
        setheaderVariants("hidden");
      }
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

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
    // <Header
    //   // style={headerVariants}
    //   >
    <motion.header
      // initial={{ x: "100%" }}
      // animate={{ x: 0 }}
      className={`home-page-layout-header`}
      animate={headerVariants}
      variants={variants}
    >
      <Container>
        <Row>
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
                  <Button type="danger">
                    <Link to="/auth/login">Ingresar</Link>
                  </Button>
                </Menu.Item>
                {/* <Menu.Item key="6">
                  <Button type="danger">
                    <Link to="/auth/register">Registrarme</Link>
                  </Button>
                </Menu.Item> */}
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
    </motion.header>
    // </Header>
  );
};

export default HomePageLayoutHeader;
