import Icon, { HeartTwoTone } from "@ant-design/icons";
import { Button, Col, Divider, Row } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import Container from "../../../common/Container";
import SimpleList from "../../../common/SimpleList/SimpleList";
import "./footerHomePageLayout.scss";

const FooterHomePageLayout = () => {
  return (
    <footer className="home-page-layout-footer">
      <Container>
        <div className="home-page-layout-footer__content">
          <div className="home-page-layout-footer__group">
            <Row gutter={[16, 16]}>
              <Col flex="1  0 300px">
                <p>Partner with us</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicin</p>
              </Col>
              <Col flex="0 0 200px">
                <Button block type="primary">
                  Contactar al Soporte
                </Button>
              </Col>
            </Row>
          </div>
          <Divider />
          <div className="home-page-layout-footer__group">
            <Row gutter={[16, 16]}>
              <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 5 }}>
                <SimpleList>
                  <SimpleList.Item>
                    <b>Mercado</b>
                  </SimpleList.Item>
                  <SimpleList.Item>
                    <Link to="/condiciones">Condiciones</Link>
                  </SimpleList.Item>
                  <SimpleList.Item>
                    <Link to="/licencias">Licencias</Link>
                  </SimpleList.Item>
                  <SimpleList.Item>
                    <Link to="/condiciones">Condiciones</Link>
                  </SimpleList.Item>
                  <SimpleList.Item>
                    <Link to="/licencias">Licencias</Link>
                  </SimpleList.Item>
                </SimpleList>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 5 }}>
                <SimpleList>
                  <SimpleList.Item>
                    <b>Mercado</b>
                  </SimpleList.Item>
                  <SimpleList.Item>
                    <Link to="/condiciones">Condiciones</Link>
                  </SimpleList.Item>
                  <SimpleList.Item>
                    <Link to="/licencias">Licencias</Link>
                  </SimpleList.Item>
                  <SimpleList.Item>
                    <Link to="/condiciones">Condiciones</Link>
                  </SimpleList.Item>
                  <SimpleList.Item>
                    <Link to="/licencias">Licencias</Link>
                  </SimpleList.Item>
                </SimpleList>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 5 }}>
                <SimpleList>
                  <SimpleList.Item>
                    <b>Mercado</b>
                  </SimpleList.Item>
                  <SimpleList.Item>
                    <Link to="/condiciones">Condiciones</Link>
                  </SimpleList.Item>
                  <SimpleList.Item>
                    <Link to="/licencias">Licencias</Link>
                  </SimpleList.Item>
                  <SimpleList.Item>
                    <Link to="/condiciones">Condiciones</Link>
                  </SimpleList.Item>
                  <SimpleList.Item>
                    <Link to="/licencias">Licencias</Link>
                  </SimpleList.Item>
                </SimpleList>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 12 }} lg={{ span: 9 }}>
                <SimpleList>
                  <SimpleList.Item>
                    <b>LOGO</b>
                  </SimpleList.Item>
                  <SimpleList.Item>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quod pariatur aut at in ducimus, qui provident magnam sit
                    sed nisi nostrum ipsum consectetur? Quidem doloribus ipsam
                    est hic error accusamus?{" "}
                  </SimpleList.Item>
                  <SimpleList.Item>Lima - Perú</SimpleList.Item>
                  <SimpleList.Item>Avenida del cora</SimpleList.Item>
                </SimpleList>
              </Col>
            </Row>
          </div>
          <Divider />
          <div className="home-page-layout-footer__group">
            <Row
              gutter={[
                { xs: 16, sm: 16, md: 16, lg: 16 },
                { xs: 16, sm: 16, md: 16, lg: 16 },
              ]}
            >
              {/* sm={{ span: 6 }} lg={{ span: 6 }} */}
              <Col flex={"0 0 80px"}>
                <img
                  src="https://public-assets.envato-static.com/assets/header-footer/logo-bcorp-fbdd18d9fd7274a0e6591e67408e26c55df20358c3c4eee496117b16874e1749.svg"
                  alt="Corporation"
                  className=""
                  style={{ width: "50px" }}
                />
              </Col>
              <Col flex={"1 0 300px"}>
                <SimpleList direction="horizontal">
                  <SimpleList.Item>
                    <Link to="/condiciones">Sobre Eventos</Link>
                  </SimpleList.Item>
                  <SimpleList.Item>
                    <Link to="/condiciones">Carreras</Link>
                  </SimpleList.Item>
                  <SimpleList.Item>
                    <Link to="/licencias">Política de privacidad</Link>
                  </SimpleList.Item>
                  <SimpleList.Item>
                    <Link to="/licencias">Mapa del sitio</Link>
                  </SimpleList.Item>
                </SimpleList>
                <p>
                  Todos los precios están en Soles peruanos y excluyen el
                  impuesto a las ventas.
                </p>
                <p>
                  © 2020 teleconsulta . Las marcas registradas y las marcas son
                  propiedad de sus respectivos dueños.
                </p>
              </Col>
              <Col flex="0 0 350px">
                <div>
                  <FacebookOutlined style={{ fontSize: "28px" }} />
                  <TwitterOutlined style={{ fontSize: "28px" }} />
                  <InstagramOutlined style={{ fontSize: "28px" }} />
                </div>
                <Divider />
                <p style={{ margin: "0" }}>
                  This page is created by{" "}
                  <HeartTwoTone twoToneColor="#eb2f96" />{" "}
                  <a
                    href="https://www.facebook.com/jersonomar.ramirezortiz/"
                    target="_blank"
                  >
                    Jerson Ramírez Ortiz
                  </a>{" "}
                  <HeartTwoTone twoToneColor="#eb2f96" />
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default FooterHomePageLayout;
