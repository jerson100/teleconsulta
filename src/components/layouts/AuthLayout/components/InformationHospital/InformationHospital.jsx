import React from "react";
import "./informationHospital.scss";

const InformationHospital = () => {
  return (
    <div className="information-hospital">
      <h1 className="information-hospital__title">Nombre del hospital</h1>
      <section className="information-hospital__section">
        <h2 className="information-hospital__subtitle">Misión</h2>
        <p className="information-hospital__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus consequuntur doloribus consequatur.
        </p>
      </section>
      <section className="information-hospital__section">
        <h2 className="information-hospital__subtitle">Visión</h2>
        <p className="information-hospital__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus consequuntur doloribus consequatur.
        </p>
      </section>
    </div>
  );
};

export default InformationHospital;
