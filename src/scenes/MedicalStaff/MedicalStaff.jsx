import React from "react";
import { Space, Typography } from "antd";
import Container from "../../components/common/Container";
import { Helmet } from "react-helmet";
import "./medicalStaff.scss";
import SearchMedicalStaff from "./components/SearchMedicalStaff/SearchMedicalStaff";
import Layout from "antd/lib/layout/layout";
import CardMedicalStaffList from "../../components/common/CardMedicalStaffList";

const { Title } = Typography;

const MedicalStaff = () => {
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Médicos altamente capacitados para brindarle el mejor servicio de consulta online."
        ></meta>
        <title>Staff de Médicos | Teleconsulta</title>
      </Helmet>
      <div className="medical-staff">
        <div className="medical-staff__content">
          <Layout className="medical-staff__section  medical-staff__medical-search">
            <Container>
              <Space direction="vertical" style={{ width: "100%" }} size={25}>
                <Title level={2}>Buscar Médico</Title>
                <SearchMedicalStaff />
                <CardMedicalStaffList />
              </Space>
            </Container>
          </Layout>
        </div>
      </div>
    </>
  );
};

export default MedicalStaff;
