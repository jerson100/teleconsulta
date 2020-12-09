import { Carousel, Col, Row, Typography } from "antd";
import React from "react";
import Container from "../../components/common/Container";
import HomePageLayoutWrapper from "../../components/layouts/HomePageLayout/HomePageLayoutWrapper/HomePageLayoutWrapper";
import "./doctorSpecialtyScene.scss";

import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import CardMedicalStaff from "../../components/common/CardMedicalStaffList/components/CardMedicalStaff";
import d1 from "../../components/common/CardMedicalStaffList/services/img/d1.jpg";
import d2 from "../../components/common/CardMedicalStaffList/services/img/d2.jpg";
import d3 from "../../components/common/CardMedicalStaffList/services/img/d3.jpg";
import d4 from "../../components/common/CardMedicalStaffList/services/img/d4.jpg";

const doctors = [
  {
    id: 1,
    name: "Ana maría",
    codeSchool: "122656595",
    image: d2,
    qrCode:
      "https://pe.linkedin.com/jobs/view/analista-programador-java-banco-importante-san-isidro-at-veriinfo-2333255415?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    correo: "ana@gmail.com",
    descripcion: "Me gusta ayudar a los enfermos",
    domicilio: "Lima -  d",
    especialidad: "Médico General",
  },
  {
    id: 2,
    name: "Rosa Chuiqwemd Saenz",
    codeSchool: "122656596",
    image: d1,
    qrCode: "http://facebook.github.io/react/a",
    correo: "Rosa@gmail.com",
    descripcion: "Me gusta ser médico",
    domicilio: "Iquitos",
    especialidad: "Médico",
  },
  {
    id: 3,
    name: "Marta Romel Wuicnwso",
    codeSchool: "1226565916",
    image: d4,
    qrCode: "https://www.google.com/",
    correo: "marta4512516@gmail.com",
    descripcion: "Me gusta ser médico y ayudar a los demás",
    domicilio: "La vida 15047",
    especialidad: "Médico",
  },
  {
    id: 4,
    name: "Pedro JuanMarti Rosmel",
    codeSchool: "1226565915",
    image: d3,
    qrCode: "https://www.pexels.com/",
    correo: "pedriytolawsd4512516@gmail.com",
    descripcion: "Me gusta ser médico y ayudar a los demás",
    domicilio: "La vida 15047",
    especialidad: "Médico",
  },
];

const DoctorSpecialtyScene = ({
  match: {
    params: { especialty },
  },
}) => {
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
        </Container>
        <section className="doctor-specialty-scene__section ">
          <Container>
            <Row gutter={[{ md: 32 }, { md: 32 }]}>
              <Col
                //   xs={{ span: 24 }}
                //   sm={{ span: 12 }}
                flex={"1 0 350px"}
                className="doctor-specialty-scene__col-left"
              >
                <div className="doctor-specialty-scene__right">
                  <Typography.Title level={2}>
                    {/* {especialty.replace("-", " ")} */}
                    Descripción
                  </Typography.Title>
                  {/* <p className="doctor-specialty-scene__title">
                </p> */}
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
              <Col
                xs={{ span: 24 }}
                flex={"0 0 400px"}
                className="doctor-specialty-scene__col-right"
              >
                <div className="doctor-specialty-scene__left">
                  {/* <Sticky enabled={imageSticky} top={80}> */}
                  <div className="doctor-specialty-scene__img-container">
                    <img
                      src="https://www.clinicainternacional.com.pe/uploads/especialidade/cardio/cita.jpg"
                      alt="cardilogía"
                      className="doctor-specialty-scene__img"
                    />
                  </div>
                  {/* </Sticky> */}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="doctor-specialty-scene__section doctor-specialty-scene__staff">
          <Container>
            <Typography.Title level={2} style={{ color: "#fff" }}>
              Staff
            </Typography.Title>
            {/* <CardMedicalStaffList /> */}
            <Carousel dotPosition={"left"} autoplay>
              {doctors.map((d, i) => (
                <div key={i}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "2rem 0",
                    }}
                  >
                    <CardMedicalStaff
                      name={d.name}
                      codeSchool={d.codeSchool}
                      image={d.image}
                      qrCode={d.qrCode}
                      correo={d.correo}
                      descripcion={d.descripcion}
                      domicilio={d.domicilio}
                      especialidad={d.especialidad}
                      maxWidth="350px"
                    />
                  </div>
                </div>
              ))}
            </Carousel>
          </Container>
        </section>
      </div>
    </>
  );
};

export default DoctorSpecialtyScene;
