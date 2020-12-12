import { Radio } from "antd";
import { motion } from "framer-motion";
import React, { useState } from "react";
import JeStepsButtonNext from "../../../../components/common/JeSteps/components/JeStepsButtonNext";
import JeStepsButtonPrevious from "../../../../components/common/JeSteps/components/JeStepsButtonPrevious";
import {
  buttonsStepVariants,
  //   containerStepVariants,
  //   radioStepVariants,
} from "../../variants/stepVariants";
import RequestMedicalAppointmentStepWrapper from "../RequestMedicalAppointmentStepWrapper";
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
    <RequestMedicalAppointmentStepWrapper title="Seleccione un Tipo de servicio">
      <div className="request-medical-appointment-type-of-service">
        {/* <motion.div
          variants={radioStepVariants}
          initial="hidden"
          animate="visible"
          className="request-medical-appointment-type-of-service__radio"
        > */}
        <div className="request-medical-appointment-type-of-service__radio">
          <Radio.Group onChange={onChange} value={typeOfService}>
            {typesOfServices.map((r) => (
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
        {/* </motion.div> */}
        <br />
        <motion.div
          variants={buttonsStepVariants}
          className="request-medical-appointment-type-of-service__buttons"
        >
          <JeStepsButtonPrevious>Anterior</JeStepsButtonPrevious>
          <JeStepsButtonNext>Siguiente</JeStepsButtonNext>
        </motion.div>
      </div>
    </RequestMedicalAppointmentStepWrapper>

    // <motion.div
    //   variants={containerStepVariants}
    //   initial="hidden"
    //   animate="visible"
    //   className="request-medical-appointment-specialties"
    // >
    //   <Typography.Title level={2}>
    //     Seleccione un Tipo de servicio:{" "}
    //   </Typography.Title>
    //   <motion.div
    //     variants={radioStepVariants}
    //     initial="hidden"
    //     animate="visible"
    //     className="request-medical-appointment-specialties__radio"
    //   >
    //     <Radio.Group onChange={onChange} value={typeOfService}>
    //       {typesOfServices.map((r) => (
    //         <Radio style={radioStyle} value={r.id} key={r.id}>
    //           {r.name}
    //         </Radio>
    //       ))}
    //     </Radio.Group>
    //   </motion.div>
    //   <br />
    //   <motion.div
    //     variants={buttonsStepVariants}
    //     initial="hidden"
    //     animate="visible"
    //     className="request-medical-appointment-specialties__buttons"
    //   >
    //     <JeStepsButtonPrevious>Anterior</JeStepsButtonPrevious>
    //     <JeStepsButtonNext>Siguiente</JeStepsButtonNext>
    //   </motion.div>
    // </motion.div>
  );
};

export default RequestMedicalAppointmentTypeOfService;
