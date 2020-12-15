import React from "react";
import { Statistic } from "antd";
import useJeSteps from "../../../../../../components/common/JeSteps/hooks/useJeSteps";
// import useRequestMedicalAppointmentContext from "../../../../hooks/useRequestMedicalAppointmentContext";

// import "./countDown.scss";
const { Countdown } = Statistic;

const Count = () => {
  const deadline = Date.now() + 1000 * 60 * 10; // Moment is also OK
  const { previous } = useJeSteps();
  //   const {reset} = useRequestMedicalAppointmentContext();
  const handleFinish = () => {
    previous();
  };
  return (
    <>
      <Countdown
        title="Tiempo restante:"
        value={deadline}
        onFinish={handleFinish}
      />
    </>
  );
};

export default React.memo(Count);
