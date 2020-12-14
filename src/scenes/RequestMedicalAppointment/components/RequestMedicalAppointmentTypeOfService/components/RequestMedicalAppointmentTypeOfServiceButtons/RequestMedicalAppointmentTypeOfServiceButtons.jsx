import { notification } from "antd";
import { motion } from "framer-motion";
import React from "react";
import JeStepsButtonNext from "../../../../../../components/common/JeSteps/components/JeStepsButtonNext";
import JeStepsButtonPrevious from "../../../../../../components/common/JeSteps/components/JeStepsButtonPrevious";
import useRequestMedicalAppointmentContext from "../../../../hooks/useRequestMedicalAppointmentContext";
import { buttonsStepVariants } from "../../../../variants/stepVariants";

const RequestMedicalAppointmentTypeOfServiceButtons = ({
  typeOfServiceSelected,
}) => {
  const { setTypeOfService } = useRequestMedicalAppointmentContext();
  const handleNext = (current, next) => {
    if (typeOfServiceSelected === 0) {
      notification.warning({
        placement: "topRight",
        bottom: 50,
        duration: 3,
        message: "Seleccione un tipo de servicio",
      });
    } else {
      setTypeOfService(typeOfServiceSelected);
      //   setMedic(medics.find((r) => r.id === specialtiesLocal));
      next();
    }
  };
  return (
    <motion.div
      variants={buttonsStepVariants}
      className="request-medical-appointment-type-of-service__buttons"
    >
      <JeStepsButtonPrevious>Anterior</JeStepsButtonPrevious>
      <JeStepsButtonNext handleClick={handleNext}>Siguiente</JeStepsButtonNext>
    </motion.div>
  );
};

export default RequestMedicalAppointmentTypeOfServiceButtons;
