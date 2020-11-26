import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import "./fullDesktopBg.scss";

const FullDesktopBg = ({ show, color, handleClick, addOverFlowBody }) => {
  useEffect(() => {
    if (addOverFlowBody && show) {
      const body = document.body;
      body.style.overflow = "hidden";
      return () => {
        body.style = "";
      };
    }
  }, [addOverFlowBody, show]);
  if (!show) return null;
  return createPortal(
    <div
      className={`full-desktop-bg full-desktop-bg--color-${color}`}
      onClick={handleClick}
    ></div>,
    document.body
  );
};

FullDesktopBg.propTypes = {
  color: PropTypes.oneOf(["dark", "semidark"]),
  handleClick: PropTypes.func,
  show: PropTypes.bool,
  addOverFlowBody: PropTypes.bool,
};
FullDesktopBg.defaultProps = {
  color: "semidark",
  handleClick: () => {},
  show: false,
  addOverFlowBody: false,
};

// export default createPortal(FullDesktopBg, document.body);
export default FullDesktopBg;
