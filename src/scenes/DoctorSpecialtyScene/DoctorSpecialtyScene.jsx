import { Col, Row } from "antd";
import React from "react";
import Container from "../../components/common/Container";
// import { StickyContainer, Sticky } from "react-sticky";
import Sticky from "react-stickynode";
import HomePageLayoutWrapper from "../../components/layouts/HomePageLayout/HomePageLayoutWrapper/HomePageLayoutWrapper";
import "./doctorSpecialtyScene.scss";

import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useMatchMedia from "../../hooks/useMatchMedia";
import { Helmet } from "react-helmet";

const DoctorSpecialtyScene = ({
  match: {
    params: { especialty },
  },
}) => {
  console.log(especialty);
  const imageSticky = useMatchMedia("(min-width: 768px)");
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Aquí va la descripción breve de la página"
        ></meta>
        <title> {especialty.replace("-", " ")} | teleconsulta</title>
      </Helmet>
      <div className="doctor-specialty-scene">
        <div className="doctor-specialty-scene__title">
          <HomePageLayoutWrapper title={especialty.replace("-", " ")} />
        </div>
        <Container>
          <div className="doctor-specialty-scene__navigation">
            <Breadcrumb>
              <Breadcrumb.Item>
                <HomeOutlined />
                <Link to="/">Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <UserOutlined />
                <Link to="/especialidades">Especialidades</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{especialty.replace("-", " ")}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <Row gutter={[{ md: 32 }, { md: 32 }]}>
            <Col xs={{ span: 24 }} flex={"500px"}>
              <div className="doctor-specialty-scene__left">
                <Sticky enabled={imageSticky} top={80}>
                  <div className="doctor-specialty-scene__img-container">
                    <img
                      src="https://www.clinicainternacional.com.pe/uploads/especialidade/cardio/cita.jpg"
                      alt="cardilogía"
                      className="doctor-specialty-scene__img"
                    />
                  </div>
                </Sticky>
              </div>
            </Col>
            <Col xs={24} md={{ span: 24 }} flex={"1 1 0"}>
              <div className="doctor-specialty-scene__right">
                <p className="doctor-specialty-scene__title">
                  {especialty.replace("-", " ")}
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias optio quis possimus, perferendis tempore libero
                  deleniti nihil natus cumque cum ipsum officiis, accusantium
                  quo nisi quas! Ea aspernatur recusandae cumque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias optio quis possimus, perferendis tempore libero
                  deleniti nihil natus cumque cum ipsum officiis, accusantium
                  quo nisi quas! Ea aspernatur recusandae cumque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias optio quis possimus, perferendis tempore libero
                  deleniti nihil natus cumque cum ipsum officiis, accusantium
                  quo nisi quas! Ea aspernatur recusandae cumque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias optio quis possimus, perferendis tempore libero
                  deleniti nihil natus cumque cum ipsum officiis, accusantium
                  quo nisi quas! Ea aspernatur recusandae cumque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias optio quis possimus, perferendis tempore libero
                  deleniti nihil natus cumque cum ipsum officiis, accusantium
                  quo nisi quas! Ea aspernatur recusandae cumque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias optio quis possimus, perferendis tempore libero
                  deleniti nihil natus cumque cum ipsum officiis, accusantium
                  quo nisi quas! Ea aspernatur recusandae cumque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias optio quis possimus, perferendis tempore libero
                  deleniti nihil natus cumque cum ipsum officiis, accusantium
                  quo nisi quas! Ea aspernatur recusandae cumque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias optio quis possimus, perferendis tempore libero
                  deleniti nihil natus cumque cum ipsum officiis, accusantium
                  quo nisi quas! Ea aspernatur recusandae cumque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias optio quis possimus, perferendis tempore libero
                  deleniti nihil natus cumque cum ipsum officiis, accusantium
                  quo nisi quas! Ea aspernatur recusandae cumque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias optio quis possimus, perferendis tempore libero
                  deleniti nihil natus cumque cum ipsum officiis, accusantium
                  quo nisi quas! Ea aspernatur recusandae cumque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias optio quis possimus, perferendis tempore libero
                  deleniti nihil natus cumque cum ipsum officiis, accusantium
                  quo nisi quas! Ea aspernatur recusandae cumque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias optio quis possimus, perferendis tempore libero
                  deleniti nihil natus cumque cum ipsum officiis, accusantium
                  quo nisi quas! Ea aspernatur recusandae cumque.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestias optio quis possimus, perferendis tempore libero
                  deleniti nihil natus cumque cum ipsum officiis, accusantium
                  quo nisi quas! Ea aspernatur recusandae cumque.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default DoctorSpecialtyScene;
