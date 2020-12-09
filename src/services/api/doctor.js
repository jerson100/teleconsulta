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
  },
];

export const getDoctors = () => {
  return doctors;
};
