import { notification } from "antd";
import React, { useCallback } from "react";
import JeStepsButtonNext from "../../../../../../components/common/JeSteps/components/JeStepsButtonNext";
import JeStepsButtonPrevious from "../../../../../../components/common/JeSteps/components/JeStepsButtonPrevious";
import useRequestMedicalAppointmentContext from "../../../../hooks/useRequestMedicalAppointmentContext";

const RequestMedicalAppointmentSelectDayButtons = ({
  selectDay,
  selectHour,
}) => {
  const { setDate, setHour } = useRequestMedicalAppointmentContext();

  const handleNext = useCallback(
    (current, next) => {
      //si está validado ahí nomas
      //   console.log(selectDay, selectHour);
      if (selectDay && selectHour) {
        // console.log("ok!");
        // console.log(selectDay);
        // console.log(selectHour);
        setDate({ id: 200, name: selectDay.toString() });
        setHour({ id: 2050, name: selectHour });
        next();
      } else {
        notification.warning({
          placement: "topRight",
          bottom: 50,
          duration: 3,
          message: "Eliga día y hora para poder continuar.",
        });
      }
    },
    [selectDay, selectHour, setDate, setHour]
  );
  return (
    <div className="request-medical-appointment-select-day__buttons">
      <JeStepsButtonNext handleClick={handleNext}>Siguiente</JeStepsButtonNext>
      <JeStepsButtonPrevious>Anterior</JeStepsButtonPrevious>
    </div>
  );
};

export default RequestMedicalAppointmentSelectDayButtons;
