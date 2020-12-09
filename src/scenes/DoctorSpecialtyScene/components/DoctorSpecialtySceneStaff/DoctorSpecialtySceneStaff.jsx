import React, { useEffect, useState } from "react";
import { Carousel, Typography } from "antd";
import CardMedicalStaff from "../../../../components/common/CardMedicalStaffList/components/CardMedicalStaff";
import Container from "../../../../components/common/Container";
import { getDoctors } from "../../../../services/api/doctor";
import "./doctorSpecialtySceneStaff.scss";

const DoctorSpecialtySceneStaff = ({ specialty }) => {
  const [doctors, setdoctors] = useState([]);
  useEffect(() => {
    setdoctors(getDoctors());
  }, []);
  return (
    <div className="doctor-specialty-scene-staff">
      <Container>
        <Typography.Title
          level={2}
          className="doctor-specialty-scene-staff__title"
        >
          Staff
        </Typography.Title>
        <Carousel dotPosition={"left"} autoplay>
          {doctors.map((d, i) => (
            <div key={i}>
              <div className="doctor-specialty-scene-staff__doctors">
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
    </div>
  );
};

export default React.memo(DoctorSpecialtySceneStaff);
