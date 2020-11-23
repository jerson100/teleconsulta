import React from "react";
import { Typography } from "antd";
import "./category.scss";

const { Title } = Typography;

const Category = ({ title }) => {
  return (
    <article className="category">
      <header className="category__header">
        <Title level={3} className="category__title">
          {title}
        </Title>
      </header>
      <div className="category__body"></div>
    </article>
  );
};

export default Category;
