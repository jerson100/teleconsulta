import React, { useEffect, useState } from "react";

import "./requestMedicalAppointmentSelectDay.scss";
import RequestMedicalAppointmentSelectDayCalendar from "./components/RequestMedicalAppointmentSelectDayCalendar/RequestMedicalAppointmentSelectDayCalendar";
import RequestMedicalAppointmentSelectDayHours from "./components/RequestMedicalAppointmentSelectDayHours";
import RequestMedicalAppointmentSelectDayButtons from "./components/RequestMedicalAppointmentSelectDayButtons/RequestMedicalAppointmentSelectDayButtons";
import { getSchedule } from "../../../../services/api/doctor";
import useRequestMedicalAppointmentContext from "../../hooks/useRequestMedicalAppointmentContext";

const RequestMedicalAppointmentSelectDay = () => {
  const [selectDay, setselectDay] = useState(null);
  const [selectHour, setSelectHour] = useState(null);
  const [schedule, setSchedules] = useState([]);
  const { medic } = useRequestMedicalAppointmentContext();
  useEffect(() => {
    //api request
    setSchedules(getSchedule(medic.id));
  }, [medic.id]);

  return (
    <div className="request-medical-appointment-select-day">
      <RequestMedicalAppointmentSelectDayCalendar
        date={selectDay}
        setDate={setselectDay}
        days={schedule}
      />
      <RequestMedicalAppointmentSelectDayHours
        day={selectDay}
        schedule={schedule}
        setSelectHour={setSelectHour}
      />
      <RequestMedicalAppointmentSelectDayButtons
        selectDay={selectDay}
        selectHour={selectHour}
      />
    </div>
  );
};

export default RequestMedicalAppointmentSelectDay;
