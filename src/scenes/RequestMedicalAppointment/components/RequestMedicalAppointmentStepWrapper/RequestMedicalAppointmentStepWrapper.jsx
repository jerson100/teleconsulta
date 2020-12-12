import { Typography } from "antd";
import { motion } from "framer-motion";
import React from "react";
import JeSection from "../../../../components/common/JeSection/JeSection";
import {
  containerStepVariants,
  WrapperContentStepVariants,
} from "../../variants/stepVariants";

const RequestMedicalAppointmentStepWrapper = ({ title, children }) => {
  return (
    <JeSection isMargin={false}>
      <motion.div
        variants={containerStepVariants}
        initial="hidden"
        animate="visible"
        className="request-medical-appointment-step-wrapper"
      >
        <Typography.Title
          className="request-medical-appointment-step-wrapper__title"
          level={2}
        >
          {title}:{" "}
        </Typography.Title>
        <motion.div
          variants={WrapperContentStepVariants}
          //   initial="hidden"
          //   animate="visible"
          className="request-medical-appointment-step-wrapper__content"
        >
          {children}
        </motion.div>
      </motion.div>
    </JeSection>
  );
};

export default React.memo(RequestMedicalAppointmentStepWrapper);
