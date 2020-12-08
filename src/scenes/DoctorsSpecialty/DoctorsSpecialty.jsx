import { Col, Row } from "antd";
import React from "react";
import Container from "../../components/common/Container";
import DoctorSpecialty from "./components/DoctorSpecialty";
import DoctorsSpecialtySearch from "./components/DoctorsSpecialtySearch";

const especialidades = [
  {
    especialty: "Cardiologia",
    image:
      "https://www.clinicainternacional.com.pe/uploads/especialidade/img-portadas/esp-cardiologia.jpg",
  },
  {
    especialty: "Oftalmogía",
    image:
      "https://www.clinicainternacional.com.pe/uploads/especialidade/img-portadas/esp-oftalmologia.jpg",
  },
  {
    especialty: "Oncología",
    image:
      "https://www.clinicainternacional.com.pe/uploads/clinica-internacional-servicio-anciana-doctor.jpg",
  },
  {
    especialty: "Odontología",
    image:
      "https://www.clinicainternacional.com.pe/uploads/especialidade/img-portadas/esp-odontologi-a.jpg",
  },
  {
    especialty: "Traumatología",
    image:
      "https://www.clinicainternacional.com.pe/uploads/especialidade/img-portadas/esp-traumatologia.jpg",
  },
];

const DoctorsSpecialty = () => {
  return (
    <div className="doctors-specialty">
      <Container>
        <DoctorsSpecialtySearch />
        <Row
          gutter={[
            { md: 16, xl: 32 },
            { xs: 16, md: 16, xl: 32 },
          ]}
        >
          {especialidades.map((e, i) => (
            <Col sm={{ span: 24 }} md={{ span: 12 }} xl={{ span: 8 }} key={i}>
              <DoctorSpecialty especialty={e.especialty} image={e.image} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default DoctorsSpecialty;
