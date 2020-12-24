import React from "react";
import "./temperature.scss";

const Temperature = ({ grades, locale }) => {
  return (
    <div className="temperature">
      <div className="temperature__top">
        <span className="temperature__locale">{locale}</span>
      </div>
      <div className="temperature__bottom">
        <span className="temperature__title">Temperatura</span>
        <span className="temperature__grade">{grades}ºC</span>
      </div>
    </div>
  );
};

export default Temperature;
