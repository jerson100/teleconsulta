import React from "react";
import { Button, Col, Form, Input, Row, Select } from "antd";
import "./searchMedicalStaff.scss";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const SearchMedicalStaff = () => {
  return (
    <div className="search-medical-staff">
      <Form {...layout}>
        <Row
          gutter={[
            { xs: 0, lg: 16 },
            { xs: 0, lg: 16 },
          ]}
        >
          <Col xs={{ span: 24 }} lg={{ span: 9 }}>
            <Form.Item label="Especialidad">
              <Select placeholder="Especialidad" size="large">
                <Select.Option key="0">Todos</Select.Option>
                <Select.Option key="1">Cardiología</Select.Option>
                <Select.Option key="2">Oftalmología</Select.Option>
                <Select.Option key="3">Oncología</Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 9 }}>
            <Form.Item label="Médico" name="medico">
              <Input size="large" placeholder="Ingresa un nombre" />
            </Form.Item>
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 6 }}>
            <Form.Item wrapperCol={{ span: 24 }} style={{ textAlign: "right" }}>
              <Button type="primary" size="large">
                Buscar
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchMedicalStaff;