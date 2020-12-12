import React from "react";
import "./requestMedicalAppointmentSteps.scss";
import RequestVirtualMedical from "../RequestVirtualMedical/RequestVirtualMedical";
import JeSteps from "../../../../components/common/JeSteps";
import RequestMedicalAppointmentSelectCategory from "../RequestMedicalAppointmentSelectCategory";
import useRequestMedicalAppointmentContext from "../../hooks/useRequestMedicalAppointmentContext";
import RequestMedicalAppointmentSpecialties from "../RequestMedicalAppointmentSpecialties/RequestMedicalAppointmentSpecialties";
import RequestMedicalAppointmentMedic from "../RequestMedicalAppointmentMedic/RequestMedicalAppointmentMedic";
import RequestMedicalAppointmentTypeOfService from "../RequestMedicalAppointmentTypeOfService/RequestMedicalAppointmentTypeOfService";
import RequestMedicalAppointmentSelectDay from "../RequestMedicalAppointmentSelectDay/RequestMedicalAppointmentSelectDay";

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
  const { category } = useRequestMedicalAppointmentContext();
  return (
    <JeSteps>
      <JeSteps.JeStepsGroup>
        <JeSteps.JeStepsGroup.JeStepsItem>
          Solicitud
        </JeSteps.JeStepsGroup.JeStepsItem>
        <JeSteps.JeStepsGroup.JeStepsItem>
          Categoría
        </JeSteps.JeStepsGroup.JeStepsItem>
        <JeSteps.JeStepsGroup.JeStepsItem>
          {category
            ? category.id === 1
              ? "Especialidades"
              : "Médicos"
            : "..."}
        </JeSteps.JeStepsGroup.JeStepsItem>
        <JeSteps.JeStepsGroup.JeStepsItem>
          {category
            ? category.id === 1
              ? "Médicos"
              : "Especialidades"
            : "..."}
        </JeSteps.JeStepsGroup.JeStepsItem>
        <JeSteps.JeStepsGroup.JeStepsItem>
          Tipos de Servicio
        </JeSteps.JeStepsGroup.JeStepsItem>
        <JeSteps.JeStepsGroup.JeStepsItem>
          Calendario
        </JeSteps.JeStepsGroup.JeStepsItem>
      </JeSteps.JeStepsGroup>
      <JeSteps.JeStepsContent>
        <RequestVirtualMedical />
        <RequestMedicalAppointmentSelectCategory />
        {category && category.id === 1 ? (
          <RequestMedicalAppointmentSpecialties />
        ) : (
          <RequestMedicalAppointmentMedic />
        )}
        {category && category.id === 1 ? (
          <RequestMedicalAppointmentMedic />
        ) : (
          <RequestMedicalAppointmentSpecialties />
        )}
        <RequestMedicalAppointmentTypeOfService />
        <RequestMedicalAppointmentSelectDay />
      </JeSteps.JeStepsContent>
    </JeSteps>
  );
};

export default RequestMedicalAppointmentSteps;
