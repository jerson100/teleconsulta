// import { Form, Button, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import useTitlePage from "../../../../hooks/useTitlePage";
import AuthWrapper from "../../components/FormWrapper/FormWrapper";
import "./forgotMyPassword.scss";

const ForgotMyPassword = () => {
  useTitlePage("Olvidé mi contraseña");
  //   const [loading, setloading] = useState(false);
  //   const [form] = Form.useForm();
  //   //   console.log(props);
  //   const layout = {
  //     labelCol: {
  //       span: 8,
  //     },
  //     wrapperCol: {
  //       span: 16,
  //     },
  //   };

  //   const onFinish = (values) => {
  //     console.log(values);
  //     // e.preventDefault();
  //     setloading(!loading);
  //   };
  return (
    <div className="forgout-mypassword">
      <AuthWrapper title="Recuperar cuenta">
        <p className="forgout-mypassword__text">
          Póngase en contacto con juamkoo@gmail.com
        </p>
        {/* <FormWrapper.Form>
          <Form {...layout} onFinish={onFinish} form={form}>
            <Form.Item name="lastname" label="">
              <Input type="text" />
            </Form.Item>
            <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "right" }}>
              <Button htmlType="submit" type="primary" loading={loading}>
                Registrar
              </Button>
            </Form.Item>
          </Form>
        </FormWrapper.Form> */}
        <AuthWrapper.Footer align="right">
          <Link to="/auth/login">Ya tengo una cuenta</Link>
        </AuthWrapper.Footer>
      </AuthWrapper>
    </div>
  );
};

export default ForgotMyPassword;
