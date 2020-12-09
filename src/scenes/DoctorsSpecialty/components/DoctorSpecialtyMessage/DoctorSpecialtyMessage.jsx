import React from "react";
import { Col, Row, Typography } from "antd";
import JeSection from "../../../../components/common/JeSection/JeSection";
import Container from "../../../../components/common/Container";
import "./doctorSpecialtyMessage.scss";
const { Title } = Typography;

const DoctorSpecialtyMessage = () => {
  return (
    <JeSection isMargin={false}>
      <div className="doctors-specialty-message">
        <Container>
          <Row justify="space-between" align="middle">
            <Col flex="0 1 650px">
              <Title level={2} className="doctors-specialty-message__title">
                Porque tu salud nos interesa{" "}
              </Title>
            </Col>
            <Col>
              <Title level={2} className="doctors-specialty-message__logo">
                Teleconsulta
              </Title>
            </Col>
          </Row>
        </Container>
      </div>
    </JeSection>
  );
};

export default DoctorSpecialtyMessage;
