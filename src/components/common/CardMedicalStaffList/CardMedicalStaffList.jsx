import { Col, Row } from "antd";
import React from "react";
import PropTypes from "prop-types";
import CardMedicalStaff from "./components/CardMedicalStaff";

const RowGutter = [
  { xs: 0, sm: 32, md: 32 },
  { xs: 32, sm: 32, md: 32 },
];

// const colSpan = {
//   xs: { span: 22 },
//   sm: { span: 11 },
//   md: { span: 10 },
//   lg: { span: 7 },
// };

const CardMedicalStaffList = ({ doctors }) => {
  return (
    <div className="card-medical-staff-list">
      <Row justify="center" gutter={RowGutter}>
        {doctors.map((d) => (
          <Col
            flex="0 0 350px"
            // xs={colSpan.xs}
            // sm={colSpan.sm}
            // md={colSpan.md}
            // lg={colSpan.lg}
            key={d.id}
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
          </Col>
        ))}
      </Row>
    </div>
  );
};

CardMedicalStaffList.propTypes = {
  doctors: PropTypes.array,
};

CardMedicalStaffList.defaultProps = {
  doctors: [],
};

export default CardMedicalStaffList;
