// import { Form, Button, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AuthWrapper from "../../components/FormWrapper/FormWrapper";
import "./forgotMyPassword.scss";

const ForgotMyPassword = () => {
  <Helmet>
    <title>Olvidé mi contraseña | teleconsulta</title>
    <meta
      name="description"
      content="Recuperar contraseña, solicitando al administrador detalles para poder recuperarla"
    ></meta>
  </Helmet>;
  return (
    <div className="forgout-mypassword">
      <AuthWrapper title="Recuperar cuenta">
        <p className="forgout-mypassword__text">
          Póngase en contacto con juamkoo@gmail.com
        </p>
        <AuthWrapper.Footer align="right">
          <Link to="/auth/login">Ya tengo una cuenta</Link>
        </AuthWrapper.Footer>
      </AuthWrapper>
    </div>
  );
};

export default ForgotMyPassword;
