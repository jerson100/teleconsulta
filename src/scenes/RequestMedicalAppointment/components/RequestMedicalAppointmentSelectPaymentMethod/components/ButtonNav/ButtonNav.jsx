import { notification } from "antd";
import React from "react";
import JeStepsButtonNext from "../../../../../../components/common/JeSteps/components/JeStepsButtonNext";
import JeStepsButtonPrevious from "../../../../../../components/common/JeSteps/components/JeStepsButtonPrevious";
import useJeSteps from "../../../../../../components/common/JeSteps/hooks/useJeSteps";

const ButtonNav = ({ method, payNowFile }) => {
  const { next } = useJeSteps();
  const handleNext = () => {
    // console.log("siguiente...");
    if (method === 1) {
      if (!payNowFile) {
        notification.warning({ message: "Seleccione una imagen" });
      } else {
        console.log("procesar pago..");
        next();
      }
    } else if (method === 2) {
      console.log("ok!! ... method 2");
      next();
    } else {
      notification.warning({ message: "Seleccione un método" });
    }
  };
  return (
    <>
      <JeStepsButtonPrevious>Anterior</JeStepsButtonPrevious>
      <JeStepsButtonNext handleClick={handleNext}>Pagar</JeStepsButtonNext>
    </>
  );
};

export default ButtonNav;
