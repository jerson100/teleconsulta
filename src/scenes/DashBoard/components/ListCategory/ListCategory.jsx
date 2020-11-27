import { Col, Row } from "antd";
import React from "react";
import Category from "../Category";
import "./listCategory.scss";

const xxl = {
  span: 7,
};
const xs = {
  span: 24,
};
const md = {
  span: 12,
};

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
        <Col xxl={xxl} xs={xs} md={md}>
          <Category title="Especialidades" />
        </Col>
        <Col xxl={xxl} xs={xs} md={md}>
          <Category title="Noticias" />
        </Col>
        <Col xxl={xxl} xs={xs} md={md}>
          <Category title="Nuestros Médicos" />
        </Col>
        <Col xxl={xxl} xs={xs} md={md}>
          <Category title="Especialidades" />
        </Col>
        <Col xxl={xxl} xs={xs} md={md}>
          <Category title="Noticias" />
        </Col>
        <Col xxl={xxl} xs={xs} md={md}>
          <Category title="Nuestros Médicos" />
        </Col>
      </Row>
    </ul>
  );
};

export default React.memo(ListCategory);
