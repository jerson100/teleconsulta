import { Col, Row } from "antd";
import React from "react";
import Category from "../Category";
import "./listCategory.scss";

const ListCategory = ({ items }) => {
  return (
    <ul className="list-category">
      <Row gutter={[{ lg: 64 }, { lg: 64, sm: 24 }]} justify="center">
        <Col lg={{ span: 9 }}>
          <Category title="Especialidades" />
        </Col>
        <Col lg={{ span: 9 }}>
          <Category title="Noticias" />
        </Col>
        <Col lg={{ span: 9 }}>
          <Category title="Nuestros Médicos" />
        </Col>
        <Col lg={{ span: 9 }}>
          <Category title="Recetas/Rutinas de salud" />
        </Col>
      </Row>
    </ul>
  );
};

export default ListCategory;
