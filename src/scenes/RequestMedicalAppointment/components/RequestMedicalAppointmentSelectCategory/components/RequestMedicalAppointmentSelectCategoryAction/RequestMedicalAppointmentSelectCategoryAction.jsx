import { notification } from "antd";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import JeSelectCard from "../../../../../../components/common/JeSelectCard/JeSelectCard";
import JeStepsButtonNext from "../../../../../../components/common/JeSteps/components/JeStepsButtonNext";
import JeStepsButtonPrevious from "../../../../../../components/common/JeSteps/components/JeStepsButtonPrevious";
import useRequestMedicalAppointmentContext from "../../../../hooks/useRequestMedicalAppointmentContext";

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

const RequestMedicalAppointmentSelectCategoryAction = () => {
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
      />
    ));
  }, []);
  return (
    <>
      <div className="request-medical-appointment-select-category__selectCard">
        <JeSelectCard onChange={handleOnchange}>{cards}</JeSelectCard>
      </div>
      <div className="request-medical-appointment-select-category__buttons">
        <JeStepsButtonPrevious>Anterior</JeStepsButtonPrevious>
        <JeStepsButtonNext handleClick={handleNext}>
          Siguiente
        </JeStepsButtonNext>
      </div>
    </>
  );
};

export default RequestMedicalAppointmentSelectCategoryAction;
