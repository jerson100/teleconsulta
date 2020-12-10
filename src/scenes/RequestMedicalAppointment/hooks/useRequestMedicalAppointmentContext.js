import { useContext } from "react";

import { RequestMedicalAppointmentContext } from "../providers/RequestMedicalAppointmentProvider";

const useRequestMedicalAppointmentContext = () => {
  const context = useContext(RequestMedicalAppointmentContext);
  if (!context) {
    throw new Error(
      "No se puede acceder al contexto, declare su componente dentro del componente RequestMedicalAppointment"
    );
  }
  return context;
};

export default useRequestMedicalAppointmentContext;
