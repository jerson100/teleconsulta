import React from "react";
import PropTypes from "prop-types";

import "./container.scss";

const Container = ({ maxWidth, children }) => {
  return (
    <div className="container" style={{ maxWidth: maxWidth }}>
      {children}
    </div>
  );
};

Container.propTypes = {
  maxWidth: PropTypes.string,
};

Container.defaultProps = {
  maxWidth: "1200px",
};

export default Container;
