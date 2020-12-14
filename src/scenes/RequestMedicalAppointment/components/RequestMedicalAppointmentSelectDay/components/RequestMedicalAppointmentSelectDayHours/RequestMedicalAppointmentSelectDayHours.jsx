import { Typography } from "antd";
import { motion } from "framer-motion";
import React, { useCallback, useEffect, useState } from "react";
import JeSelectTag from "../../../../../../components/common/JeSelectTag";
import { getHours, getIdSchedule } from "../../../../../../services/api/doctor";

import "./requestMedicalAppointmentSelectDayHours.scss";

const variantsContainer = {
  hidden: {
    y: "100%",
  },
  visible: {
    y: 0,
    transition: {
      //   when: "beforeChildren",
      //   staggerChildren: 0.1,
      type: "spring",
      stiffness: 600,
    },
  },
};

// const variantsChild = {
//   hidden: {
//     scale: 0,
//     opacity: 0,
//   },
//   visible: (custom) => ({
//     scale: 1,
//     opacity: 1,
//     transition: { delay: custom * 0.2 },
//   }),
// };

const RequestMedicalAppointmentSelectDayHours = React.memo(
  ({ schedule, day, setSelectHour }) => {
    const [hours, setHours] = useState(null);
    useEffect(() => {
      if (day) {
        //que solamente haga una petición si esa fecha tiene disponible un doctor...
        //   console.log(date);
        //   const hrs = dates.find(
        //     ({ date: dd }) =>
        //       dd.getDate() === date.getDate() && dd.getMonth() === date.getMonth()
        //   );
        //   console.log(hrs);

        //obtenemos el id primero
        const idSchedule = getIdSchedule(schedule, day);
        const hrs = getHours(idSchedule);
        // console.log(idSchedule);
        // console.log(hrs);
        if (hrs) {
          setHours(hrs);
        } else {
          setHours(null);
        }
      } else {
        setHours(null);
      }
    }, [day, setHours, schedule]);
    // console.log(hours);

    const handleChange = useCallback(
      (key) => {
        // console.log(key);
        //hours.find((h) => h === key)
        setSelectHour("05:05");
      },
      [setSelectHour]
    );

    return (
      <div className="request-medical-appointment-select-day-hours">
        {hours ? (
          <>
            <motion.div
              variants={variantsContainer}
              initial="hidden"
              animate="visible"
              className="request-medical-appointment-select-day-hours__title"
            >
              <Typography.Title level={3}>Seleccione una hora</Typography.Title>
            </motion.div>
            <JeSelectTag handleChange={handleChange}>
              {hours.map((h, i) => (
                <JeSelectTag.Item key={h}>{h}</JeSelectTag.Item> //remplazar por el h por el id
              ))}
            </JeSelectTag>
          </>
        ) : (
          <p>No a seleccionado una fecha</p>
        )}
      </div>
    );
  }
);

export default RequestMedicalAppointmentSelectDayHours;
