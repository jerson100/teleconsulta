import { Typography } from "antd";
import React from "react";
import JeSection from "../../../../components/common/JeSection/JeSection";
import RequestMedicalAppointmentSummaryList from "./components/RequestMedicalAppointmentSummaryList/RequestMedicalAppointmentSummaryList";
import "./requestMedicalAppointmentSummary.scss";

const RequestMedicalAppointmentSummary = () => {
  return (
    <JeSection isMargin={false}>
      <div className="request-medical-appointment-summary">
        <Typography.Title
          level={2}
          className="request-medical-appointment-summary__title"
        >
          Resumen
        </Typography.Title>
        <div className="request-medical-appointment-summary__list">
          <RequestMedicalAppointmentSummaryList />
        </div>
      </div>
    </JeSection>
  );
};

export default React.memo(RequestMedicalAppointmentSummary);
