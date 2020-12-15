import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./jeSpace.scss";

const JeSpace = ({ size }) => {
  const typeOfS = typeof size;
  if (typeOfS === "number") {
    if (size < 0) {
      throw new Error("La prop size no puede ser negativa");
    } else {
      return <div className="je-space" style={{ height: `${size}px` }}></div>;
    }
  }
  if (typeOfS === "string") {
    return (
      <div className={classnames("je-space", `je-space--size-${size}`)}></div>
    );
  }
};

JeSpace.propTypes = {
  size: PropTypes.oneOfType([
    PropTypes.oneOf(["sx", "sm", "md", "lg", "xl", "xxl"]),
    PropTypes.number,
  ]).isRequired,
};

JeSpace.defaultProps = {
  size: "sx",
};

export default React.memo(JeSpace);
