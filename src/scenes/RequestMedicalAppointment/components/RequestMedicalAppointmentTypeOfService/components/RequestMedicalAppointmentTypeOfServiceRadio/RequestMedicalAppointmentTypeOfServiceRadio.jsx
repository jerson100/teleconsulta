import { Radio } from "antd";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import useRequestMedicalAppointmentContext from "../../../../hooks/useRequestMedicalAppointmentContext";

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px",
};

const typesOfServicesData = [
  {
    id: 1,
    name: "Tipo de servicio 1",
  },
  {
    id: 2,
    name: "Tipo de servicio 2",
  },
  {
    id: 3,
    name: "Tipo de servicio 3",
  },
  {
    id: 4,
    name: "Tipo de servicio 4",
  },
];

const RequestMedicalAppointmentTypeOfServiceRadio = ({
  settypeOfServiceSelected,
}) => {
  const [typeOfService, settypeOfService] = useState(0);
  const [typeOfServices, settypeOfServices] = useState([]);

  const { resettypeOfService } = useRequestMedicalAppointmentContext();

  useEffect(() => {
    resettypeOfService();
    console.log("e-e");
  }, [resettypeOfService]);

  useEffect(() => {
    settypeOfServices(typesOfServicesData);
  }, []); //la dependencia debería de ser el id del doctor y el id de la especialidad

  return (
    <div className="request-medical-appointment-type-of-service__radio">
      <Radio.Group
        onChange={(e) => {
          settypeOfService(e.target.value);
          settypeOfServiceSelected(
            typesOfServicesData.find((t) => t.id === e.target.value)
          );
        }}
        value={typeOfService}
      >
        {typeOfServices.map((r) => (
          <motion.div whileHover={{ scale: 1.3, x: 10, originX: 0 }} key={r.id}>
            <Radio style={radioStyle} value={r.id}>
              {r.name}
            </Radio>
          </motion.div>
        ))}
      </Radio.Group>
    </div>
  );
};
export default RequestMedicalAppointmentTypeOfServiceRadio;
