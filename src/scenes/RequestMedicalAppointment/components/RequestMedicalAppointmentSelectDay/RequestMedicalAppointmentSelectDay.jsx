import React from "react";
import RequestMedicalAppointmentStepWrapper from "../RequestMedicalAppointmentStepWrapper";

import "./requestMedicalAppointmentSelectDay.scss";
import RequestMedicalAppointmentSelectDayCalendar from "./components/RequestMedicalAppointmentSelectDayCalendar/RequestMedicalAppointmentSelectDayCalendar";
//...

const RequestMedicalAppointmentSelectDay = () => {
  return (
    <RequestMedicalAppointmentStepWrapper title="Seleccione un día">
      <div className="request-medical-appointment-select-day">
        <RequestMedicalAppointmentSelectDayAction />
      </div>
    </RequestMedicalAppointmentStepWrapper>
  );
};

const RequestMedicalAppointmentSelectDayAction = () => {
  return (
    <>
      <div className="request-medical-appointment-select-day__calendar">
        <RequestMedicalAppointmentSelectDayCalendar />
      </div>
      <div className="request-medical-appointment-select-day__days"></div>
    </>
  );
};

export default RequestMedicalAppointmentSelectDay;
