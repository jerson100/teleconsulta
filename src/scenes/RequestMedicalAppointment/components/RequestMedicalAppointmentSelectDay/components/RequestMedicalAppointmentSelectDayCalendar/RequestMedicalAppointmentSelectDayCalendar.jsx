import React from "react";
// import { getDay, getDate } from "date-fns";
import { enGB } from "date-fns/locale";
import { DatePickerCalendar } from "react-nice-dates";
import "react-nice-dates/build/style.css";
import "./requestMedicalAppointmentSelectDayCalendar.scss";

const modifiersClassNames = {
  highlight: "request-medical-appointment-select-day-calendar--active-day",
};

const RequestMedicalAppointmentSelectDayCalendar = ({
  days,
  date,
  setDate,
}) => {
  const modifiers = {
    //   disabled: (date) => {
    //     console.log(date);
    //     return getDay(date) === 6;
    //   }, // Disables Saturdays
    highlight: (date) => {
      // const d = getDate(date);
      // const da = new Date(date);
      // console.log(da);

      return days.some(
        ({ date: dd }) =>
          dd.getDate() === date.getDate() && dd.getMonth() === date.getMonth()
      );
    }, // Highlights Tuesdays
  };
  return (
    <div className="request-medical-appointment-select-day-calendar">
      <div className="request-medical-appointment-select-day-calendar__content">
        <DatePickerCalendar
          date={date}
          onDateChange={setDate}
          locale={enGB}
          modifiers={modifiers}
          modifiersClassNames={modifiersClassNames}
        />
      </div>
    </div>
  );
};

export default React.memo(RequestMedicalAppointmentSelectDayCalendar);
