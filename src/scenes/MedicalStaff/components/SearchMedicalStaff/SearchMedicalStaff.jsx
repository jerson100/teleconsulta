import React from "react";
import { Button, Col, Form, Input, Row, Select, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "./searchMedicalStaff.scss";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const gutter = [
  { xs: 0, lg: 16 },
  { xs: 0, lg: 16 },
];

const colSpan = { xs: { span: 24 }, sm: { span: 12 }, md: { span: 8 } };

const SearchMedicalStaff = () => {
  return (
    <div className="search-medical-staff">
      <Form {...layout} gutter={gutter}>
        <Row gutter={gutter} justify="center">
          <Col xs={colSpan.xs} sm={colSpan.sm} md={colSpan.md}>
            <Form.Item label="Especialidad">
              <Select placeholder="Especialidad" size="large">
                <Select.Option key="0">Todos</Select.Option>
                <Select.Option key="1">Cardiología</Select.Option>
                <Select.Option key="2">Oftalmología</Select.Option>
                <Select.Option key="3">Oncología</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={colSpan.xs} sm={colSpan.sm} md={colSpan.md}>
            <Form.Item label="Médico" name="medico">
              <Input size="large" placeholder="Ingresa un nombre" />
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Tooltip title="search">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<SearchOutlined />}
                  size="large"
                />
              </Tooltip>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchMedicalStaff;
