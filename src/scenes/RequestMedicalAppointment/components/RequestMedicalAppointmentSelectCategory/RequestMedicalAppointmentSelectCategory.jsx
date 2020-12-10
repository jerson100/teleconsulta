import { notification, Typography } from "antd";
import React, { useEffect, useState } from "react";
import JeSection from "../../../../components/common/JeSection/JeSection";
import JeSelectCard from "../../../../components/common/JeSelectCard/JeSelectCard";
import JeStepsButtonNext from "../../../../components/common/JeSteps/components/JeStepsButtonNext";
import JeStepsButtonPrevious from "../../../../components/common/JeSteps/components/JeStepsButtonPrevious";
import useRequestMedicalAppointmentContext from "../../hooks/useRequestMedicalAppointmentContext";
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
  const [api, contextHolder] = notification.useNotification();

  const { setCategory, resetCategory } = useRequestMedicalAppointmentContext();

  useEffect(() => {
    resetCategory();
  }, [resetCategory]);

  const handleOnchange = (key) => {
    setselectedIndex(key);
  };

  const handleNext = (current, next) => {
    if (selectedIndex !== "indiceDesconocido") {
      setCategory(categories.find((c) => c.id === selectedIndex));
      next();
    } else {
      api.warning({
        placement: "topRight",
        bottom: 50,
        duration: 3,
        message: "Eliga una categoría",
      });
    }
  };

  return (
    <JeSection isMargin={false}>
      {contextHolder}
      <div className="request-medical-appointment-select-category">
        <Typography.Title
          level={2}
          className="request-medical-appointment-select-category__title"
        >
          Escoge una categoría
        </Typography.Title>
        <div className="request-medical-appointment-select-category__selectCard">
          <JeSelectCard onChange={handleOnchange}>
            {categories.map((c) => (
              <JeSelectCard.JeSelectCardItem
                title={c.name}
                selectKey={c.id}
                key={c.id}
              />
            ))}
            {/* <JeSelectCard.JeSelectCardItem title="Médicos" selectKey="2" /> */}
          </JeSelectCard>
        </div>
        <div className="request-medical-appointment-select-category__buttons">
          <JeStepsButtonPrevious>Anterior</JeStepsButtonPrevious>
          <JeStepsButtonNext handleClick={handleNext}>
            Siguiente
          </JeStepsButtonNext>
        </div>
      </div>
    </JeSection>
  );
};

export default RequestMedicalAppointmentSelectCategory;
