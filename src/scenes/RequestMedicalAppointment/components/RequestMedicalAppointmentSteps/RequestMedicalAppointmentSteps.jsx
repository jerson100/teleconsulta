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
import RequestMedicalAppointmentStepWrapper from "../RequestMedicalAppointmentStepWrapper";
import RequestMedicalAppointmentSelectPaymentMethod from "../RequestMedicalAppointmentSelectPaymentMethod/RequestMedicalAppointmentSelectPaymentMethod";
import RequestMedicalAppointmentThankYou from "../RequestMedicalAppointmentThankYou";

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
        <JeSteps.JeStepsGroup.JeStepsItem>
          Método de pago
        </JeSteps.JeStepsGroup.JeStepsItem>
        <JeSteps.JeStepsGroup.JeStepsItem>
          Terminado
        </JeSteps.JeStepsGroup.JeStepsItem>
      </JeSteps.JeStepsGroup>
      <JeSteps.JeStepsContent>
        <RequestMedicalAppointmentStepWrapper title="Solicitud">
          <RequestVirtualMedical />
        </RequestMedicalAppointmentStepWrapper>
        <RequestMedicalAppointmentStepWrapper title="Seleccione una Categoría">
          <RequestMedicalAppointmentSelectCategory />
        </RequestMedicalAppointmentStepWrapper>
        {category && category.id === 1 ? (
          <RequestMedicalAppointmentStepWrapper title="Seleccione una Especialidad">
            <RequestMedicalAppointmentSpecialties />
          </RequestMedicalAppointmentStepWrapper>
        ) : (
          <RequestMedicalAppointmentStepWrapper title="Seleccione un médico">
            <RequestMedicalAppointmentMedic />
          </RequestMedicalAppointmentStepWrapper>
        )}
        {category && category.id === 1 ? (
          <RequestMedicalAppointmentStepWrapper title="Seleccione un médico">
            <RequestMedicalAppointmentMedic />
          </RequestMedicalAppointmentStepWrapper>
        ) : (
          <RequestMedicalAppointmentStepWrapper title="Seleccione una Especialidad">
            <RequestMedicalAppointmentSpecialties />
          </RequestMedicalAppointmentStepWrapper>
        )}

        <RequestMedicalAppointmentStepWrapper title="Seleccione un Tipo de servicio">
          <RequestMedicalAppointmentTypeOfService />
        </RequestMedicalAppointmentStepWrapper>

        <RequestMedicalAppointmentStepWrapper title="Seleccione un día">
          <RequestMedicalAppointmentSelectDay />
        </RequestMedicalAppointmentStepWrapper>

        <RequestMedicalAppointmentStepWrapper title="Seleccione un Método de pago">
          <RequestMedicalAppointmentSelectPaymentMethod />
        </RequestMedicalAppointmentStepWrapper>

        <RequestMedicalAppointmentStepWrapper title="Gracias por confiar en nosotros ♥">
          <RequestMedicalAppointmentThankYou />
        </RequestMedicalAppointmentStepWrapper>
      </JeSteps.JeStepsContent>
    </JeSteps>
  );
};

export default RequestMedicalAppointmentSteps;
