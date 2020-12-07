import React from "react";
import PropTypes from "prop-types";
import "./description.scss";

const Description = ({
  icon,
  label,
  value,
  children,
  valueColor,
  labelColor,
}) => {
  return (
    <div className="description">
      <div className="description__label" style={{ labelColor }}>
        {icon && <div className="description__icon">{icon}</div>}
        {label}:{" "}
      </div>
      <div className="description__content">
        {children ? (
          children
        ) : (
          <p className="description__text" style={{ color: valueColor }}>
            {value}
          </p>
        )}
      </div>
    </div>
  );
};

Description.propTypes = {
  valueColor: PropTypes.string,
  labelColor: PropTypes.string,
};

Description.defaultProps = {
  valueColor: "black",
  labelColor: "black",
};

export default Description;
