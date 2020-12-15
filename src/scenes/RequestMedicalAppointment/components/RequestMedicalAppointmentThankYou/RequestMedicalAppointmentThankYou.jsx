import { Button, Col, Image, Row } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import JeSpace from "../../../../components/common/JeSpace";
import love from "./service/img/love.svg";
import "./requestMedicalAppointmentThankYou.scss";

const RequestMedicalAppointmentThankYou = () => {
  return (
    <div className="request-medical-appointment-thank-you">
      <JeSpace size="sm" />
      <Row>
        <Col flex="0 0 250px">
          <Image src={love} alt="médico" />
        </Col>
        <Col flex="1 0 0">
          <p>
            Mensaje de agradecimiento Mensaje de agradecimiento Mensaje de
            agradecimiento Mensaje de agradecimiento
          </p>
          <JeSpace size="sm" />
          <div className="request-medical-appointment-thank-you__button">
            <Button type="primary">
              <Link to="/">Ir al inicio</Link>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RequestMedicalAppointmentThankYou;
