import React from "react";
import Container from "../../components/common/Container";
import HomePageLayoutWrapper from "../../components/layouts/HomePageLayout/HomePageLayoutWrapper";
import "./doctorSpecialtyScene.scss";

import { Breadcrumb } from "antd";
import { HomeOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import JeSection from "../../components/common/JeSection/JeSection";
import DoctorSpecialtySceneStaff from "./components/DoctorSpecialtySceneStaff";
import DoctorSpecialtySceneDescription from "./components/DoctorSpecialtySceneDescription";

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
        <JeSection>
          <DoctorSpecialtySceneDescription />
        </JeSection>
        <JeSection isMargin={false}>
          <DoctorSpecialtySceneStaff specialty={especialty} />
        </JeSection>
      </div>
    </>
  );
};

export default DoctorSpecialtyScene;
