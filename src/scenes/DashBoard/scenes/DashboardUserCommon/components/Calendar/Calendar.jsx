import React, { useState } from "react";
import { DatePickerCalendar } from "react-nice-dates";
import { enGB } from "date-fns/locale";
import "./calendar.scss";
import "react-nice-dates/build/style.css";

const Calendar = () => {
  const [date, setdate] = useState();
  return (
    <div className="user-common-dashboard-scene-calendar">
      <DatePickerCalendar
        date={date}
        onDateChange={setdate}
        locale={enGB}
        // modifiers={modifiers}
        // modifiersClassNames={modifiersClassNames}
      />
    </div>
  );
};

export default Calendar;
