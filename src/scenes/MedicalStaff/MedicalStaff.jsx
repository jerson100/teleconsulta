import React, { useEffect, useState } from "react";
import { Space, Typography } from "antd";
import { Helmet } from "react-helmet";
import SearchMedicalStaff from "./components/SearchMedicalStaff/SearchMedicalStaff";
import CardMedicalStaffList from "../../components/common/CardMedicalStaffList";
import JeSection from "../../components/common/JeSection/JeSection";
import Container from "../../components/common/Container/Container";
import { getDoctors } from "../../services/api/doctor";
import "./medicalStaff.scss";

const { Title } = Typography;

const MedicalStaff = () => {
  const [doctors, setdoctors] = useState([]);

  useEffect(() => {
    setdoctors(getDoctors());
  }, []);

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
          <JeSection>
            <Container>
              <Space direction="vertical" style={{ width: "100%" }} size={25}>
                <Title level={2}>Buscar Médico</Title>
                <SearchMedicalStaff />
                <CardMedicalStaffList doctors={doctors} />
              </Space>
            </Container>
          </JeSection>
        </div>
      </div>
    </>
  );
};

export default MedicalStaff;
