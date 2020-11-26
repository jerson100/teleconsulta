import React from "react";
import { Link } from "react-router-dom";
import { Button, Col, Row, Typography } from "antd";

import "./homePageBanner.scss";
import Container from "../../../../components/common/Container/Container";

import bgBanner from "../../services/img/bg3.jpg";

const { Title } = Typography;

const HomePageBanner = () => {
  return (
    <section
      className="home-page-banner"
      style={{ backgroundImage: `url(${bgBanner})` }}
    >
      <Container>
        <Row>
          <Col sm={{ span: 24 }} lg={{ span: 9 }}>
            <div className="home-page-banner__content">
              <Title className="home-page-banner__title">
                Making Health Care Better Together
              </Title>
              <p className="home-page-banner__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                est rerum impedit possimus eveniet in perferendis corrupti
                adipisci, architecto cum nesciunt doloremque a expedita quo odio
                itaque aut quidem cupiditate.
              </p>
              <div className="home-page-banner__buttons">
                <Button
                  size="large"
                  type="primary"
                  className="home-page-banner__buttons-btn"
                >
                  <Link to="/auth/register">Register</Link>
                </Button>
                <Button
                  size="large"
                  type="primary"
                  className="home-page-banner__buttons-btn"
                >
                  <Link to="/auth/login">Login</Link>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomePageBanner;
