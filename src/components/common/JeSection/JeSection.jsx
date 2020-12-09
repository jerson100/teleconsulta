import React from "react";
import PropTypes from "prop-types";
import "./jeSection.scss";

const JeSection = ({ children, isMargin }) => {
  return (
    <section className={`je-section ${isMargin ? "je-section--margin" : ""}`}>
      {children}
    </section>
  );
};

JeSection.propTypes = {
  isMargin: PropTypes.bool,
};

JeSection.defaultProps = {
  isMargin: true,
};

export default JeSection;
