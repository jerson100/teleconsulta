import React from "react";
import { Form, Input, Row, Col, Tooltip, Divider } from "antd";
import { InfoCircleOutlined, SearchOutlined } from "@ant-design/icons";

import "./searchMedicalAppointment.scss";

/*
    xl, xs: 8, sm: 16, md: 24, lg: 32 
 */
const SearchMedicalAppointment = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  return (
    <div className="search-medical-appointment">
      <Divider orientation="right">Buscar: </Divider>
      <Form {...layout} labelAlign="left">
        <Row justify={"space-between"}>
          <Col sm={{ span: 24 }} lg={{ span: 11 }} xxl={{ span: 7 }}>
            <Form.Item label="Doctor" name="doctor">
              <Input
                prefix={<SearchOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Extra information">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
              />
            </Form.Item>
          </Col>
          <Col sm={{ span: 24 }} lg={{ span: 11 }} xxl={{ span: 7 }}>
            <Form.Item label="Especialidad" name="especialidad">
              <Input
                prefix={<SearchOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Extra information">
                    <InfoCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  </Tooltip>
                }
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchMedicalAppointment;
