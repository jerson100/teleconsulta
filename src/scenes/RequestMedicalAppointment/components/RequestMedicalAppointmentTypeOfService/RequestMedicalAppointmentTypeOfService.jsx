import { notification, Radio, Typography } from "antd";
import React, { useState } from "react";
import JeStepsButtonNext from "../../../../components/common/JeSteps/components/JeStepsButtonNext";
import JeStepsButtonPrevious from "../../../../components/common/JeSteps/components/JeStepsButtonPrevious";
// import useRequestMedicalAppointmentContext from "../../hooks/useRequestMedicalAppointmentContext";

const typesOfServices = [
  {
    id: 1,
    name: "Tipo de servicio 1",
  },
  {
    id: 2,
    name: "Tipo de servicio 2",
  },
  {
    id: 3,
    name: "Tipo de servicio 3",
  },
  {
    id: 4,
    name: "Tipo de servicio 4",
  },
];

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

const RequestMedicalAppointmentTypeOfService = () => {
  const [typeOfService, settypeOfService] = useState(0);
  const [api, contextHolder] = notification.useNotification();
  //   const { setMedic, resetMedic } = useRequestMedicalAppointmentContext();

  // const handleNext = (current, next) => {
  //   if (specialtiesLocal === 0) {
  //     api.warning({
  //       placement: "topRight",
  //       bottom: 50,
  //       duration: 3,
  //       message: "Seleccione un médico",
  //     });
  //   } else {
  //     setMedic(medics.find((r) => r.id === specialtiesLocal));
  //     next();
  //   }
  // };

  // useEffect(() => {
  //   resetMedic();
  // }, [resetMedic]);

  const onChange = (e) => {
    settypeOfService(e.target.value);
  };
  return (
    <div className="request-medical-appointment-specialties">
      {contextHolder}
      <Typography.Title level={2}>
        Seleccione un Tipo de servicio:{" "}
      </Typography.Title>
      <div className="request-medical-appointment-specialties__radio">
        <Radio.Group onChange={onChange} value={typeOfService}>
          {typesOfServices.map((r) => (
            <Radio style={radioStyle} value={r.id} key={r.id}>
              {r.name}
            </Radio>
          ))}
        </Radio.Group>
      </div>
      <br />
      <div className="request-medical-appointment-specialties__buttons">
        <JeStepsButtonPrevious>Anterior</JeStepsButtonPrevious>
        <JeStepsButtonNext>Siguiente</JeStepsButtonNext>
      </div>
    </div>
  );
};

export default RequestMedicalAppointmentTypeOfService;
