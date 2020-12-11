import { notification, Radio, Typography } from "antd";
import React, { useEffect, useState } from "react";
import JeStepsButtonNext from "../../../../components/common/JeSteps/components/JeStepsButtonNext";
import JeStepsButtonPrevious from "../../../../components/common/JeSteps/components/JeStepsButtonPrevious";
import useRequestMedicalAppointmentContext from "../../hooks/useRequestMedicalAppointmentContext";

const medics = [
  {
    id: 1,
    name: "Juan Manuel",
  },
  {
    id: 2,
    name: "Pédro Quispe",
  },
  {
    id: 3,
    name: "Saenz Vacl",
  },
  {
    id: 4,
    name: "Juñlidw dwdw",
  },
  {
    id: 5,
    name: "Saenz Lispo",
  },
];

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

const RequestMedicalAppointmentMedic = () => {
  return (
    <div className="request-medical-appointment-specialties">
      <Typography.Title level={2}>Seleccione un médico: </Typography.Title>
      <RequestMedicalAppointmentMedicActions />
    </div>
  );
};

const RequestMedicalAppointmentMedicActions = () => {
  const [specialtiesLocal, setspecialtiesLocal] = useState(0);
  const { setMedic, resetMedic } = useRequestMedicalAppointmentContext();

  const handleNext = (current, next) => {
    if (specialtiesLocal === 0) {
      notification.warning({
        placement: "topRight",
        bottom: 50,
        duration: 3,
        message: "Seleccione un médico",
      });
    } else {
      setMedic(medics.find((r) => r.id === specialtiesLocal));
      next();
    }
  };

  useEffect(() => {
    resetMedic();
  }, [resetMedic]);

  const onChange = (e) => {
    setspecialtiesLocal(e.target.value);
  };
  return (
    <>
      <div className="request-medical-appointment-specialties__radio">
        <Radio.Group onChange={onChange} value={specialtiesLocal}>
          {medics.map((r) => (
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

export default RequestMedicalAppointmentMedic;
