import { Col, Row } from "antd";
import React from "react";
import CardMedicalStaff from "../CardMedicalStaff/CardMedicalStaff";
import d1 from "../../services/img/d1.jpg";
import d2 from "../../services/img/d2.jpg";
import d3 from "../../services/img/d3.jpg";
import d4 from "../../services/img/d4.jpg";

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

const RowGutter = [
  { xs: 0, sm: 32, md: 32 },
  { xs: 32, sm: 32, md: 32 },
];

const colSpan = {
  xs: { span: 22 },
  sm: { span: 11 },
  md: { span: 10 },
  lg: { span: 7 },
};

const CardMedicalStaffList = () => {
  return (
    <div className="card-medical-staff-list">
      <Row justify="center" gutter={RowGutter}>
        {doctors.map((d) => (
          <Col
            xs={colSpan.xs}
            sm={colSpan.sm}
            md={colSpan.md}
            lg={colSpan.lg}
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
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardMedicalStaffList;
