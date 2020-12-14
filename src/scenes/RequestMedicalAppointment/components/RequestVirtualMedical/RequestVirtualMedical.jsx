import React, { useEffect, useState } from "react";
import { notification, Radio } from "antd";
import "./requestVirtualMedical.scss";
import JeStepsButtonNext from "../../../../components/common/JeSteps/components/JeStepsButtonNext";
// import JeSection from "../../../../components/common/JeSection/JeSection";
import useRequestMedicalAppointmentContext from "../../hooks/useRequestMedicalAppointmentContext";
// import { motion } from "framer-motion";
// import { containerStepVariants } from "../../variants/stepVariants";
import RequestMedicalAppointmentStepWrapper from "../RequestMedicalAppointmentStepWrapper";
import { motion } from "framer-motion";
import { buttonsStepVariants } from "../../variants/stepVariants";

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
      notification.warning({
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
    <div className="request-medical-appointment-specialties">
      <div className="request-virtual-medical__radio">
        <Radio.Group
          onChange={onChange}
          value={requestVirtualMedicalOptionLocal}
        >
          {radios.map((r) => (
            <motion.div
              whileHover={{ scale: 1.3, x: 10, originX: 0 }}
              key={r.id}
            >
              <Radio style={radioStyle} value={r.id}>
                {r.name}
              </Radio>
            </motion.div>
          ))}
        </Radio.Group>
      </div>
      <br />
      <motion.div
        variants={buttonsStepVariants}
        className="request-virtual-medical__button"
      >
        <JeStepsButtonNext handleClick={handleNext}>
          Siguiente
        </JeStepsButtonNext>
      </motion.div>
    </div>
    // <JeSection isMargin={false}>
    //   <motion.div
    //     variants={containerStepVariants}
    //     initial="hidden"
    //     animate="visible"
    //     className="request-virtual-medical"
    //   >
    //     <Typography.Title level={2}>Seleccione una opción</Typography.Title>
    //     <div className="request-virtual-medical__radio">
    //       <Radio.Group
    //         onChange={onChange}
    //         value={requestVirtualMedicalOptionLocal}
    //       >
    //         {radios.map((r) => (
    //           <Radio style={radioStyle} value={r.id} key={r.id}>
    //             {r.name}
    //           </Radio>
    //         ))}
    //       </Radio.Group>
    //     </div>
    //     <br />
    //     <div className="request-virtual-medical__button">
    //       <JeStepsButtonNext handleClick={handleNext}>
    //         Siguiente
    //       </JeStepsButtonNext>
    //     </div>
    //   </motion.div>
    // </JeSection>
  );
};

export default RequestVirtualMedical;
