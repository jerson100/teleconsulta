import React from "react";
import { notification, Typography } from "antd";
import JeSection from "../../../../components/common/JeSection/JeSection";
import RequestMedicalAppointmentSelectCategoryAction from "./components/RequestMedicalAppointmentSelectCategoryAction/RequestMedicalAppointmentSelectCategoryAction";
import "./requestMedicalAppointmentSelectCategory.scss";

const RequestMedicalAppointmentSelectCategory = () => {
  return (
    <JeSection isMargin={false}>
      <div className="request-medical-appointment-select-category">
        <Typography.Title
          level={2}
          className="request-medical-appointment-select-category__title"
        >
          Escoge una categoría
        </Typography.Title>
        <RequestMedicalAppointmentSelectCategoryAction />
      </div>
    </JeSection>
  );
};

export default RequestMedicalAppointmentSelectCategory;
