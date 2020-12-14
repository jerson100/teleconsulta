import React, { useState } from "react";
import useRequestMedicalAppointmentContext from "../../hooks/useRequestMedicalAppointmentContext";
import RequestMedicalAppointmentTypeOfServiceButtons from "./components/RequestMedicalAppointmentTypeOfServiceButtons/RequestMedicalAppointmentTypeOfServiceButtons";
import RequestMedicalAppointmentTypeOfServiceRadio from "./components/RequestMedicalAppointmentTypeOfServiceRadio/RequestMedicalAppointmentTypeOfServiceRadio";

const RequestMedicalAppointmentTypeOfService = () => {
  const [typeOfServiceSelected, settypeOfServiceSelected] = useState(0);

  //   const onChange = (e) => {
  //     settypeOfService(e.target.value);
  //   };
  return (
    <div className="request-medical-appointment-type-of-service">
      {/* <motion.div
          variants={radioStepVariants}
          initial="hidden"
          animate="visible"
          className="request-medical-appointment-type-of-service__radio"
        > */}
      <RequestMedicalAppointmentTypeOfServiceRadio
        settypeOfServiceSelected={settypeOfServiceSelected}
      />
      {/* </motion.div> */}
      <br />
      <RequestMedicalAppointmentTypeOfServiceButtons
        typeOfServiceSelected={typeOfServiceSelected}
      />
    </div>

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
