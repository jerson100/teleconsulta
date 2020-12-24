import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./container.scss";

const Container = ({ maxWidth, children }) => {
  let classNames = "container";
  let style = {};
  if (typeof maxWidth === "number") {
    style.maxWidth = `${maxWidth}px`;
  } else {
    classNames = classnames("container", `container--size-${maxWidth}`);
  }
  return (
    <div className={classNames} style={style}>
      {children}
    </div>
  );
};

Container.propTypes = {
  maxWidth: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["sx", "sm", "md", "lg", "xl", "xxl"]),
  ]),
};

Container.defaultProps = {
  maxWidth: 1200,
};

export default Container;
