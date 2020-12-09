import React from "react";
import { Col, Row, Typography } from "antd";
import JeSection from "../../../../common/JeSection/JeSection";
import Container from "../../../../common/Container";
import "./homePageLayoutMessage.scss";
const { Title } = Typography;

const HomePageLayoutMessage = () => {
  return (
    <JeSection isMargin={false}>
      <div className="home-page-layout-message">
        <Container>
          <Row justify="space-between" align="middle">
            <Col flex="0 1 650px">
              <Title level={2} className="home-page-layout-message__title">
                Porque tu salud nos interesa{" "}
              </Title>
            </Col>
            <Col>
              <Title level={2} className="home-page-layout-message__logo">
                Teleconsulta
              </Title>
            </Col>
          </Row>
        </Container>
      </div>
    </JeSection>
  );
};

export default HomePageLayoutMessage;
