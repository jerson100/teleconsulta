import { Col, Row } from "antd";
import React from "react";
import Category from "../Category";
import "./listCategory.scss";

const ListCategory = ({ items }) => {
  return (
    <ul className="list-category">
      <Row
        gutter={[
          { xs: 0, md: 24, xxl: 64 },
          { xs: 24, md: 24, xxl: 64 },
        ]}
        justify="center"
      >
        <Col xxl={{ span: 7 }} xs={{ span: 24 }} md={{ span: 12 }}>
          <Category title="Especialidades" />
        </Col>
        <Col xxl={{ span: 7 }} xs={{ span: 24 }} md={{ span: 12 }}>
          <Category title="Noticias" />
        </Col>
        <Col xxl={{ span: 7 }} xs={{ span: 24 }} md={{ span: 12 }}>
          <Category title="Nuestros Médicos" />
        </Col>
        <Col xxl={{ span: 7 }} xs={{ span: 24 }} md={{ span: 12 }}>
          <Category title="Especialidades" />
        </Col>
        <Col xxl={{ span: 7 }} xs={{ span: 24 }} md={{ span: 12 }}>
          <Category title="Noticias" />
        </Col>
        <Col xxl={{ span: 7 }} xs={{ span: 24 }} md={{ span: 12 }}>
          <Category title="Nuestros Médicos" />
        </Col>
      </Row>
    </ul>
  );
};

export default ListCategory;
