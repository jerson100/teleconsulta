import { notification, Radio, Typography } from "antd";
import React, { useEffect, useState } from "react";
import JeStepsButtonNext from "../../../../components/common/JeSteps/components/JeStepsButtonNext";
import JeStepsButtonPrevious from "../../../../components/common/JeSteps/components/JeStepsButtonPrevious";
import useRequestMedicalAppointmentContext from "../../hooks/useRequestMedicalAppointmentContext";

const specialties = [
  {
    id: 1,
    name: "Ginecología",
  },
  {
    id: 2,
    name: "Cardiología",
  },
  {
    id: 3,
    name: "Traumatología",
  },
  {
    id: 4,
    name: "Neurología",
  },
];

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

const RequestMedicalAppointmentSpecialties = () => {
  return (
    <div className="request-medical-appointment-specialties">
      <Typography.Title level={2}>
        Seleccione una especialidad:{" "}
      </Typography.Title>
      <div className="request-medical-appointment-specialties__actions">
        <RequestMedicalAppointmentSpecialtiesAction />
      </div>
    </div>
  );
};

const RequestMedicalAppointmentSpecialtiesAction = () => {
  const [specialtiesLocal, setspecialtiesLocal] = useState(0);
  const {
    setSpecialties,
    resetSpecialties,
  } = useRequestMedicalAppointmentContext();

  const handleNext = (current, next) => {
    if (specialtiesLocal === 0) {
      notification.warning({
        placement: "topRight",
        bottom: 50,
        duration: 3,
        message: "Seleccione una especialidad",
      });
    } else {
      setSpecialties(specialties.find((r) => r.id === specialtiesLocal));
      next();
    }
  };

  useEffect(() => {
    resetSpecialties();
  }, [resetSpecialties]);

  const onChange = (e) => {
    setspecialtiesLocal(e.target.value);
  };
  return (
    <>
      <div className="request-medical-appointment-specialties__radio">
        <Radio.Group onChange={onChange} value={specialtiesLocal}>
          {specialties.map((r) => (
            <Radio style={radioStyle} value={r.id} key={r.id}>
              {r.name}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <br />
      <div className="request-medical-appointment-specialties__buttons">
        <JeStepsButtonPrevious>Anterior</JeStepsButtonPrevious>
        <JeStepsButtonNext handleClick={handleNext}>
          Siguiente
        </JeStepsButtonNext>
      </div>
    </>
  );
};

export default RequestMedicalAppointmentSpecialties;
