import { notification, Radio } from "antd";
import { motion } from "framer-motion";
// import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
// import JeSection from "../../../../components/common/JeSection/JeSection";
import JeStepsButtonNext from "../../../../components/common/JeSteps/components/JeStepsButtonNext";
import JeStepsButtonPrevious from "../../../../components/common/JeSteps/components/JeStepsButtonPrevious";
import useRequestMedicalAppointmentContext from "../../hooks/useRequestMedicalAppointmentContext";
import { buttonsStepVariants } from "../../variants/stepVariants";
// import { containerStepVariants } from "../../variants/stepVariants";
import RequestMedicalAppointmentStepWrapper from "../RequestMedicalAppointmentStepWrapper";

const specialties = [
  {
    id: 1,
    name: "Ginecología",
  },
  {
    id: 2,
    name: "Cardiología",
  },
  {
    id: 3,
    name: "Traumatología",
  },
  {
    id: 4,
    name: "Neurología",
  },
];

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

const RequestMedicalAppointmentSpecialties = () => {
  return (
    <RequestMedicalAppointmentStepWrapper title="Seleccione una especialidad">
      <div className="request-medical-appointment-specialties">
        <RequestMedicalAppointmentSpecialtiesAction />
      </div>
    </RequestMedicalAppointmentStepWrapper>
    // <JeSection isMargin={false}>
    //   <motion.div
    //     variants={containerStepVariants}
    //     initial="hidden"
    //     animate="visible"
    //     className="request-medical-appointment-specialties"
    //   >
    //     <Typography.Title level={2}>
    //       Seleccione una especialidad:{" "}
    //     </Typography.Title>
    //     <div className="request-medical-appointment-specialties__actions">
    //       <RequestMedicalAppointmentSpecialtiesAction />
    //     </div>
    //   </motion.div>
    // </JeSection>
  );
};

const RequestMedicalAppointmentSpecialtiesAction = () => {
  const [specialtiesLocal, setspecialtiesLocal] = useState(0);
  const {
    setSpecialties,
    resetSpecialties,
  } = useRequestMedicalAppointmentContext();

  const handleNext = (current, next) => {
    if (specialtiesLocal === 0) {
      notification.warning({
        placement: "topRight",
        bottom: 50,
        duration: 3,
        message: "Seleccione una especialidad",
      });
    } else {
      setSpecialties(specialties.find((r) => r.id === specialtiesLocal));
      next();
    }
  };

  useEffect(() => {
    resetSpecialties();
  }, [resetSpecialties]);

  const onChange = (e) => {
    setspecialtiesLocal(e.target.value);
  };
  return (
    <>
      <div className="request-medical-appointment-specialties__radio">
        <Radio.Group onChange={onChange} value={specialtiesLocal}>
          {specialties.map((r) => (
            <motion.div
              whileHover={{ scale: 1.3, x: 10, originX: 0 }}
              key={r.id}
            >
              <Radio style={radioStyle} value={r.id}>
                {r.name}
              </Radio>
            </motion.div>
          ))}
        </Radio.Group>
      </div>
      <br />
      <motion.div
        variants={buttonsStepVariants}
        className="request-medical-appointment-specialties__buttons"
      >
        <JeStepsButtonPrevious>Anterior</JeStepsButtonPrevious>
        <JeStepsButtonNext handleClick={handleNext}>
          Siguiente
        </JeStepsButtonNext>
      </motion.div>
    </>
  );
};

export default RequestMedicalAppointmentSpecialties;
