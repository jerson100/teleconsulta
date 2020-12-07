import React from "react";
import Container from "../../components/common/Container";
import { Helmet } from "react-helmet";
import CardMedicalStaffList from "./components/CardMedicalStaffList/CardMedicalStaffList";
import "./medicalStaff.scss";

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
          <Container>
            <CardMedicalStaffList />
          </Container>
        </div>
      </div>
    </>
  );
};

export default MedicalStaff;
