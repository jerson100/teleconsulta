import React from "react";

const DoctorSpecialty = ({ especialty, image }) => {
  return (
    <div className="doctor-specialty">
      <div className="doctor-specialty__header">
        <img src={image} alt={especialty} className="doctor-specialty__img" />
      </div>
      <div className="doctor-specialty__body">
        <p className="doctor-specialty__especialty">{especialty}</p>
      </div>
    </div>
  );
};

export default DoctorSpecialty;
