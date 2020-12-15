import { notification } from "antd";
import { motion } from "framer-motion";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import JeSelectCard from "../../../../components/common/JeSelectCard/JeSelectCard";
import JeStepsButtonNext from "../../../../components/common/JeSteps/components/JeStepsButtonNext";
import JeStepsButtonPrevious from "../../../../components/common/JeSteps/components/JeStepsButtonPrevious";
import useRequestMedicalAppointmentContext from "../../hooks/useRequestMedicalAppointmentContext";
import { buttonsStepVariants } from "../../variants/stepVariants";

import "./requestMedicalAppointmentSelectCategory.scss";

const categories = [
  {
    id: 1,
    name: "Especialidades",
  },
  {
    id: 2,
    name: "Médicos",
  },
];

const RequestMedicalAppointmentSelectCategory = () => {
  const [selectedIndex, setselectedIndex] = useState("indiceDesconocido");
  const { setCategory, resetCategory } = useRequestMedicalAppointmentContext();

  const handleOnchange = useCallback((key) => {
    setselectedIndex(key);
  }, []);

  useEffect(() => {
    resetCategory();
  }, [resetCategory]);

  const handleNext = (current, next) => {
    if (selectedIndex !== "indiceDesconocido") {
      setCategory(categories.find((c) => c.id === selectedIndex));
      next();
    } else {
      notification.warning({
        placement: "topRight",
        bottom: 50,
        duration: 3,
        message: "Eliga una categoría",
      });
    }
  };

  const cards = useMemo(() => {
    return categories.map((c) => (
      <JeSelectCard.JeSelectCardItem
        title={c.name}
        selectKey={c.id}
        key={c.id}
        img="https://jersonramirez.netlify.app/static/media/d2.6a3bdcfa.jpg"
      />
    ));
  }, []);
  return (
    <div className="request-medical-appointment-select-category">
      <div className="request-medical-appointment-select-category__selectCard">
        <JeSelectCard onChange={handleOnchange}>{cards}</JeSelectCard>
      </div>
      <motion.div
        variants={buttonsStepVariants}
        className="request-medical-appointment-select-category__buttons"
      >
        <JeStepsButtonPrevious>Anterior</JeStepsButtonPrevious>
        <JeStepsButtonNext handleClick={handleNext}>
          Siguiente
        </JeStepsButtonNext>
      </motion.div>
    </div>

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
