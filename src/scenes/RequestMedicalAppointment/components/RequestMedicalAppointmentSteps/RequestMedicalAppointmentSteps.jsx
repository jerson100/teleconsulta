import React from "react";
import "./requestMedicalAppointmentSteps.scss";
import RequestVirtualMedical from "../RequestVirtualMedical/RequestVirtualMedical";
import JeSteps from "../../../../components/common/JeSteps";

// const steps = [
//   {
//     title: "Solicitud",
//     content: <RequestVirtualMedical />,
//   },
//   {
//     title: "Escoge Categoría",
//     content: "Second-content",
//   },
//   {
//     title: "Especialidad",
//     content: "Last-content",
//   },
//   {
//     title: "Médicos",
//     content: "First-content",
//   },
//   {
//     title: "Tipos de servicio",
//     content: "Second-content",
//   },
//   {
//     title: "Calendario",
//     content: "Last-content",
//   },
//   {
//     title: "Método de pago",
//     content: "Second-content",
//   },
// ];
const RequestMedicalAppointmentSteps = () => {
  return (
    <JeSteps>
      <JeSteps.JeStepsGroup>
        <JeSteps.JeStepsGroup.JeStepsItem>
          Step1
        </JeSteps.JeStepsGroup.JeStepsItem>
        <JeSteps.JeStepsGroup.JeStepsItem>
          Step2
        </JeSteps.JeStepsGroup.JeStepsItem>
        <JeSteps.JeStepsGroup.JeStepsItem>
          Step3
        </JeSteps.JeStepsGroup.JeStepsItem>
      </JeSteps.JeStepsGroup>
      <JeSteps.JeStepsContent>
        <RequestVirtualMedical />
      </JeSteps.JeStepsContent>
    </JeSteps>
  );
};

export default RequestMedicalAppointmentSteps;
