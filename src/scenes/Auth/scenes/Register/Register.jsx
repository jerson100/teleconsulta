import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Helmet } from "react-helmet";
import AuthWrapper from "../../components/FormWrapper/FormWrapper";
import { Link } from "react-router-dom";

const Register = () => {
  const [loading, setloading] = useState(false);
  const [form] = Form.useForm();

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  const onFinish = (values) => {
    setloading(!loading);
  };

  return (
    <>
      <Helmet>
        <title>Registro | teleconsulta</title>
        <meta
          name="description"
          content="Página de registro de usuario para acceder a la aplicación de teleconsulta"
        ></meta>
      </Helmet>
      <div className="registrar">
        <AuthWrapper title="Registro">
          <AuthWrapper.Form>
            <Form {...layout} onFinish={onFinish} form={form}>
              <Form.Item name="dniruc" label="Dni/Ruc">
                <Input type="text" />
              </Form.Item>
              <Form.Item name="name" label="Nombres">
                <Input type="text" />
              </Form.Item>
              <Form.Item name="lastname" label="Apellidos">
                <Input type="text" />
              </Form.Item>
              <Form.Item
                wrapperCol={{ span: 24 }}
                style={{ textAlign: "right" }}
              >
                <Button htmlType="submit" type="primary" loading={loading}>
                  Registrar
                </Button>
              </Form.Item>
            </Form>
          </AuthWrapper.Form>
          <AuthWrapper.Footer align="center">
            <Link
              to={{
                pathname: "/auth/login",
              }}
            >
              Ya tengo una cuenta
            </Link>
          </AuthWrapper.Footer>
        </AuthWrapper>
      </div>
    </>
  );
};

export default Register;
