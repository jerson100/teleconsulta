import React from "react";
import Container from "../../../common/Container";
import { Typography } from "antd";
import "./homePageLayoutWrapper.scss";

const { Title } = Typography;

const HomePageLayoutWrapper = ({ title, children }) => {
  //   console.log(title);
  return (
    <div className="home-page-layout-wrapper">
      {title && (
        <div className="home-page-layout-wrapper__title">
          <Container>
            <Title className="home-page-layout-wrapper__title-page">
              {title}
            </Title>
          </Container>
        </div>
      )}
      <div className="home-page-layout-wrapper__content">{children}</div>
    </div>
  );
};

export default HomePageLayoutWrapper;
