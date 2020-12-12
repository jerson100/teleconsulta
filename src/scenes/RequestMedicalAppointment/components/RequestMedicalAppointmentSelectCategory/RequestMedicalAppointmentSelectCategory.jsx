import React from "react";
// import { notification, Typography } from "antd";
// import JeSection from "../../../../components/common/JeSection/JeSection";
import RequestMedicalAppointmentSelectCategoryAction from "./components/RequestMedicalAppointmentSelectCategoryAction/RequestMedicalAppointmentSelectCategoryAction";
import "./requestMedicalAppointmentSelectCategory.scss";
// import { motion } from "framer-motion";
// import { containerStepVariants } from "../../variants/stepVariants";
import RequestMedicalAppointmentStepWrapper from "../RequestMedicalAppointmentStepWrapper";

const RequestMedicalAppointmentSelectCategory = () => {
  return (
    <RequestMedicalAppointmentStepWrapper title="Escoge una categoría">
      <div className="request-medical-appointment-select-category">
        <RequestMedicalAppointmentSelectCategoryAction />
      </div>
    </RequestMedicalAppointmentStepWrapper>

    // <JeSection isMargin={false}>
    //   <motion.div
    //     variants={containerStepVariants}
    //     initial="hidden"
    //     animate="visible"
    //     className="request-medical-appointment-select-category"
    //   >
    //     <Typography.Title
    //       level={2}
    //       className="request-medical-appointment-select-category__title"
    //     >
    //       Escoge una categoría
    //     </Typography.Title>
    //     <RequestMedicalAppointmentSelectCategoryAction />
    //   </motion.div>
    // </JeSection>
  );
};

export default RequestMedicalAppointmentSelectCategory;
