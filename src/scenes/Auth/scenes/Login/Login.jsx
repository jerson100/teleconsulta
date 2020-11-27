import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Input, Button } from "antd";
import "./login.scss";
import AuthWrapper from "../../components/FormWrapper/FormWrapper";
import { Helmet } from "react-helmet";
// import useTitlePage from "../../../../hooks/useTitlePage";

const Login = (props) => {
  const [loading, setloading] = useState(false);
  const [form] = Form.useForm();
  //   useTitlePage("Login de acceso");

  const { replace } = useHistory();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onFinish = (values) => {
    replace("/dashboard");
  };

  return (
    <>
      <Helmet>
        <title>Login | teleconsulta</title>
        <meta
          name="description"
          content="Página de inicio de sessión para acceder a la aplicación de teleconsulta"
        ></meta>
      </Helmet>
      <div className="login">
        <AuthWrapper title="Ingresar">
          <AuthWrapper.Form>
            <Form {...layout} onFinish={onFinish} form={form}>
              <Form.Item name="dniruc" label="Dni/Ruc">
                <Input type="text" />
              </Form.Item>
              <Form.Item name="password" label="Contraseña">
                <Input type="password" />
              </Form.Item>
              <Form.Item
                wrapperCol={{ span: 24 }}
                style={{ textAlign: "right" }}
              >
                <Button htmlType="submit" type="primary" loading={loading}>
                  Ingresar
                </Button>
              </Form.Item>
            </Form>
          </AuthWrapper.Form>
          <AuthWrapper.Footer align="center">
            <Link to="/auth/register">Crear cuenta</Link>
            <br />
            <Link to="/auth/forgoutpassword">Me olvidé mi contraseña</Link>
            <br />
            <Link to="/">Página Principal</Link>
          </AuthWrapper.Footer>
        </AuthWrapper>
      </div>
    </>
  );
};

export default Login;
