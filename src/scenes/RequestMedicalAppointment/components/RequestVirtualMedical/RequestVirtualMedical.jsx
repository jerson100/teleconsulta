import React, { useEffect, useState } from "react";
import { notification, Radio, Typography } from "antd";
import "./requestVirtualMedical.scss";
import JeStepsButtonNext from "../../../../components/common/JeSteps/components/JeStepsButtonNext";
import JeSection from "../../../../components/common/JeSection/JeSection";
import useRequestMedicalAppointmentContext from "../../hooks/useRequestMedicalAppointmentContext";

const radios = [
  {
    id: 1,
    name: "Option  A",
  },
  {
    id: 2,
    name: "Consulta Médica Virtual",
  },
  {
    id: 3,
    name: "Option  C",
  },
];

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

const RequestVirtualMedical = () => {
  const [
    requestVirtualMedicalOptionLocal,
    setrequestVirtualMedicalOptionLocal,
  ] = useState(0);

  const [api, contextHolder] = notification.useNotification();

  const {
    setRequestVirtualMedicalOption,
    resetMedicalOptionLocal,
  } = useRequestMedicalAppointmentContext();

  useEffect(() => {
    resetMedicalOptionLocal();
  }, [resetMedicalOptionLocal]);

  const onChange = (e) => {
    setrequestVirtualMedicalOptionLocal(e.target.value);
  };

  const handleNext = (current, next) => {
    if (requestVirtualMedicalOptionLocal === 0) {
      api.warning({
        placement: "topRight",
        bottom: 50,
        duration: 3,
        message: "Seleccione una opción",
      });
    } else {
      setRequestVirtualMedicalOption(
        radios.find((r) => r.id === requestVirtualMedicalOptionLocal)
      );
      next();
    }
  };

  return (
    <JeSection isMargin={false}>
      {contextHolder}
      <div className="request-virtual-medical">
        <Typography.Title level={2}>Seleccione una opción</Typography.Title>
        <div className="request-virtual-medical__radio">
          <Radio.Group
            onChange={onChange}
            value={requestVirtualMedicalOptionLocal}
          >
            {radios.map((r) => (
              <Radio style={radioStyle} value={r.id} key={r.id}>
                {r.name}
              </Radio>
            ))}
          </Radio.Group>
        </div>
        <br />
        <div className="request-virtual-medical__button">
          <JeStepsButtonNext handleClick={handleNext}>
            Siguiente
          </JeStepsButtonNext>
        </div>
      </div>
    </JeSection>
  );
};

export default RequestVirtualMedical;
