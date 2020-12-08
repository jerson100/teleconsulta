import React from "react";
import { Form, Input, Typography } from "antd";
import "./doctorsSpecialtySearch.scss";
const { Title } = Typography;

const DoctorsSpecialtySearch = () => {
  return (
    <div className="doctors-specialty__search">
      <Title level={2}>Buscar: </Title>
      <Form>
        <Form.Item>
          <Input />
        </Form.Item>
      </Form>
    </div>
  );
};

export default DoctorsSpecialtySearch;
