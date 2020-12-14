import d1 from "../img/d1.jpg";
import d2 from "../img/d2.jpg";
import d3 from "../img/d3.jpg";
import d4 from "../img/d4.jpg";

const doctors = [
  {
    id: 1,
    name: "Ana maría",
    codeSchool: "122656595",
    image: d2,
    qrCode:
      "https://pe.linkedin.com/jobs/view/analista-programador-java-banco-importante-san-isidro-at-veriinfo-2333255415?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
    correo: "ana@gmail.com",
    descripcion: "Me gusta ayudar a los enfermos",
    domicilio: "Lima -  d",
    especialidad: "Médico General",
    schedule: [
      {
        id: 1,
        date: new Date(2020, 11, 1),
        hours: ["05:25", "18:00", "12:25", "13:00"],
      },
      { id: 2, date: new Date(2020, 11, 2), hours: ["01:20", "15:00"] },
      { id: 3, date: new Date(2020, 10, 20), hours: ["02:25", "22:00"] },
      { id: 4, date: new Date(2020, 10, 4), hours: ["01:45", "19:00"] },
      { id: 5, date: new Date(2020, 10, 1), hours: ["03:45", "21:00"] },
      { id: 6, date: new Date(2021, 0, 1), hours: ["01:05", "20:00"] },
    ],
  },
  {
    id: 2,
    name: "Rosa Chuiqwemd Saenz",
    codeSchool: "122656596",
    image: d1,
    qrCode: "http://facebook.github.io/react/a",
    correo: "Rosa@gmail.com",
    descripcion: "Me gusta ser médico",
    domicilio: "Iquitos",
    especialidad: "Médico",
    schedule: [
      {
        id: 1,
        date: new Date(2020, 11, 1),
        hours: ["05:25", "18:00", "12:25", "13:00"],
      },
      { id: 2, date: new Date(2020, 11, 2), hours: ["01:20", "15:00"] },
      { id: 3, date: new Date(2020, 10, 20), hours: ["02:25", "22:00"] },
      { id: 4, date: new Date(2020, 10, 4), hours: ["01:45", "19:00"] },
      { id: 5, date: new Date(2020, 10, 1), hours: ["03:45", "21:00"] },
      { id: 6, date: new Date(2021, 0, 1), hours: ["01:05", "20:00"] },
    ],
  },
  {
    id: 3,
    name: "Marta Romel Wuicnwso",
    codeSchool: "1226565916",
    image: d4,
    qrCode: "https://www.google.com/",
    correo: "marta4512516@gmail.com",
    descripcion: "Me gusta ser médico y ayudar a los demás",
    domicilio: "La vida 15047",
    especialidad: "Médico",
    schedule: [
      {
        id: 1,
        date: new Date(2020, 11, 1),
        hours: ["05:25", "18:00", "12:25", "13:00"],
      },
      { id: 2, date: new Date(2020, 11, 2), hours: ["01:20", "15:00"] },
      { id: 3, date: new Date(2020, 10, 20), hours: ["02:25", "22:00"] },
      { id: 4, date: new Date(2020, 10, 4), hours: ["01:45", "19:00"] },
      { id: 5, date: new Date(2020, 10, 1), hours: ["03:45", "21:00"] },
      { id: 6, date: new Date(2021, 0, 1), hours: ["01:05", "20:00"] },
    ],
  },
  {
    id: 4,
    name: "Pedro JuanMarti Rosmel",
    codeSchool: "1226565915",
    image: d3,
    qrCode: "https://www.pexels.com/",
    correo: "pedriytolawsd4512516@gmail.com",
    descripcion: "Me gusta ser médico y ayudar a los demás",
    domicilio: "La vida 15047",
    especialidad: "Médico",
    schedule: [
      {
        id: 1,
        date: new Date(2020, 11, 1),
        hours: ["05:25", "18:00", "12:25", "13:00"],
      },
      { id: 2, date: new Date(2020, 11, 2), hours: ["01:20", "15:00"] },
      { id: 3, date: new Date(2020, 10, 20), hours: ["02:25", "22:00"] },
      { id: 4, date: new Date(2020, 10, 4), hours: ["01:45", "19:00"] },
      { id: 5, date: new Date(2020, 10, 1), hours: ["03:45", "21:00"] },
      { id: 6, date: new Date(2021, 0, 1), hours: ["01:05", "20:00"] },
    ],
  },
];

export const getDoctors = () => {
  return doctors;
};

export const getSchedule = (idDoctor) => {
  return doctors.find((d) => d.id === idDoctor)?.schedule;
};

export const getHours = (idSchedule) => {
  //   console.log(
  //     doctors.reduce(
  //       (prev, current) =>
  //         current.schedule.find((s) => s.id === idSchedule)?.hours,
  //       null
  //     )
  //   );
  return doctors.reduce(
    (prev, current) => current.schedule.find((s) => s.id === idSchedule)?.hours,
    null
  );
};

export const getIdSchedule = (schedule, date) => {
  //   console.log(schedule);
  //   console.log(date);
  return schedule.find(
    ({ date: s }) =>
      s.getDate() === date.getDate() &&
      s.getFullYear() === date.getFullYear() &&
      s.getMonth() === date.getMonth()
  )?.id;
};
