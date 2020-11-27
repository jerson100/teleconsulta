import React from "react";
import { Form, Input, Row, Col, Tooltip, Divider } from "antd";
import { InfoCircleOutlined, SearchOutlined } from "@ant-design/icons";

import "./searchMedicalAppointment.scss";

/*
    xl, xs: 8, sm: 16, md: 24, lg: 32 
 */

const color = { color: "rgba(0,0,0,.45)" };

const formLabeLCol = { span: 8 };
const formWrapperCol = { span: 16 };

const sm = { span: 24 };
const lg = { span: 11 };
const xxl = { span: 7 };

const SearchMedicalAppointment = () => {
  return (
    <div className="search-medical-appointment">
      <Divider orientation="right">Buscar: </Divider>
      <Form
        labelCol={formLabeLCol}
        wrapperCol={formWrapperCol}
        labelAlign="left"
      >
        <Row justify={"space-between"}>
          <Col sm={sm} lg={lg} xxl={xxl}>
            <Form.Item label="Doctor" name="doctor">
              <Input
                prefix={<SearchOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Extra information">
                    <InfoCircleOutlined style={color} />
                  </Tooltip>
                }
              />
            </Form.Item>
          </Col>
          <Col sm={sm} lg={lg} xxl={xxl}>
            <Form.Item label="Especialidad" name="especialidad">
              <Input
                prefix={<SearchOutlined className="site-form-item-icon" />}
                suffix={
                  <Tooltip title="Extra information">
                    <InfoCircleOutlined style={color} />
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

export default React.memo(SearchMedicalAppointment);
