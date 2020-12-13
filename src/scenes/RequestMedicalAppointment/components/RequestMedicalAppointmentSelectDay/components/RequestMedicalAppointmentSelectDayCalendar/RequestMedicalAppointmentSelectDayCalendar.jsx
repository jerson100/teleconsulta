import React, { useEffect, useState } from "react";
// import { getDay, getDate } from "date-fns";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import "./requestMedicalAppointmentSelectDayCalendar.scss";
import { Tag, Typography } from "antd";
import { motion } from "framer-motion";

const dates = [
  { date: new Date(2020, 11, 1), hours: ["05:25", "18:00", "12:25", "13:00"] },
  { date: new Date(2020, 11, 2), hours: ["01:20", "15:00"] },
  { date: new Date(2020, 10, 20), hours: ["02:25", "22:00"] },
  { date: new Date(2020, 10, 4), hours: ["01:45", "19:00"] },
  { date: new Date(2020, 10, 1), hours: ["03:45", "21:00"] },
  { date: new Date(2021, 0, 1), hours: ["01:05", "20:00"] },
];

const modifiers = {
  //   disabled: (date) => {
  //     console.log(date);
  //     return getDay(date) === 6;
  //   }, // Disables Saturdays
  highlight: (date) => {
    // const d = getDate(date);
    // const da = new Date(date);
    // console.log(da);

    return dates.some(
      ({ date: dd }) =>
        dd.getDate() === date.getDate() && dd.getMonth() === date.getMonth()
    );
  }, // Highlights Tuesdays
};
const modifiersClassNames = {
  highlight: "request-medical-appointment-select-day-calendar--active-day",
};

const RequestMedicalAppointmentSelectDayCalendar = () => {
  const [date, setDate] = useState(null);
  const [hours, setHours] = useState(null);

  useEffect(() => {
    if (date) {
      //que solamente haga una petición si esa fecha tiene disponible un doctor...
      //   console.log(date);
      const hrs = dates.find(
        ({ date: dd }) =>
          dd.getDate() === date.getDate() && dd.getMonth() === date.getMonth()
      );
      //   console.log(hrs);
      if (hrs) {
        setHours(hrs.hours);
      } else {
        setHours(null);
      }
    } else {
      setHours(null);
    }
  }, [date, setHours]);

  return (
    <div className="request-medical-appointment-select-day-calendar">
      {/* <div className="request-medical-appointment-select-day-calendar__day">
        Fecha seleccionada: {JSON.stringify(date)}
      </div> */}
      <div className="request-medical-appointment-select-day-calendar__content">
        <DatePickerCalendar
          date={date}
          onDateChange={setDate}
          locale={enGB}
          modifiers={modifiers}
          modifiersClassNames={modifiersClassNames}
        />
      </div>
      <div className="request-medical-appointment-select-day-calendar__hours">
        {hours ? (
          <>
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ type: "spring", stiffness: 600 }}
            >
              <Typography.Title level={2}>
                Seleccione una hora:
              </Typography.Title>
            </motion.div>
            <motion.div>
              {hours.map((h, i) => (
                <motion.div
                  variants={variantsChild}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  style={{ display: "inline-block" }}
                  key={h}
                >
                  <Tag color="geekblue">{h}</Tag>
                </motion.div>
                //   <li key={i}>{h}</li>
              ))}
            </motion.div>
          </>
        ) : (
          <p>No a seleccionado una fecha</p>
        )}
      </div>
    </div>
  );
};

// const variantsContainer = {
//   hidden: {
//     opacity: 0,
//   },
//   visible: {
//     opacity: 1,
//     transition: {
//       when: "beforeChildren",
//       staggerChildren: 0.1,
//     },
//   },
// };

const variantsChild = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

export default RequestMedicalAppointmentSelectDayCalendar;
