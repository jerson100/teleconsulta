import React from "react";
// import bglike from "../../services/img/like.svg";
// import bgdoctor from "../../services/img/doctor.svg";
import bgdoctor2 from "../../services/img/doctor2.svg";
import "./banner.scss";

const Banner = () => {
  return (
    <div className="user-common-dashboard-scene-banner">
      <p className="user-common-dashboard-scene-banner__user">
        Bienvenido
        <b className="user-common-dashboard-scene-banner__user-name">
          Jerson Omar
        </b>
      </p>
      <p className="user-common-dashboard-scene-banner__message">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
        repellendus nihil quasi laboriosam aspernatur! Ullam voluptas earum
        sequi quos quisquam culpa commodi, minima rerum alias. Ex eos totam
        cumque minima?
      </p>

      <img
        src={bgdoctor2}
        className="user-common-dashboard-scene-banner__img"
        alt="médicos"
      />
    </div>
  );
};

export default Banner;
