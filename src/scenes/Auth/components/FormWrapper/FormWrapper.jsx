import React from "react";
import PropTypes from "prop-types";
import "./formWrapper.scss";

const AuthWrapper = ({ title, children }) => {
  return (
    <div className="formWrapper">
      <h1 className="formWrapper__title">{title}</h1>
      {children}
    </div>
  );
};

const FormForm = ({ children }) => {
  return <div className="formWrapper__form">{children}</div>;
};

const FormFooter = ({ children, align }) => {
  return (
    <div className={`formWrapper__footer formWrapper__footer--align-${align}`}>
      {children}
    </div>
  );
};

FormFooter.propTypes = {
  align: PropTypes.oneOfType(["right", "left", "center"]),
};

FormFooter.defaultProps = {
  align: "right",
};

AuthWrapper.Form = FormForm;
AuthWrapper.Footer = FormFooter;

export default AuthWrapper;
