import React from "react";
import { Helmet } from "react-helmet";
import RequestMedicalAppointmentSteps from "./components/RequestMedicalAppointmentSteps";
import RequestMedicalAppointmentSummary from "./components/RequestMedicalAppointmentSummary/RequestMedicalAppointmentSummary";
import RequestMedicalAppointmentProvider from "./providers/RequestMedicalAppointmentProvider";
import { Col, Row, Typography } from "antd";
import "./requestMedicalAppointment.scss";
import Container from "../../components/common/Container";

const RequestMedicalAppointment = () => {
  return (
    <Container>
      <Helmet>
        <title>Solicitar Cita Médica | teleconsulta</title>
        <meta
          name="description"
          content="Solicita una cita médica con uno de nuestros médicos, que son altamente calificados."
        ></meta>
      </Helmet>

      <div className="request-medical-appointment">
        <Typography.Title
          level={1}
          className="request-medical-appointment__title"
        >
          Solicitar cita médica
        </Typography.Title>
        <RequestMedicalAppointmentProvider>
          <Row
            gutter={[
              { xs: 16, lg: 32 },
              { xs: 16, lg: 32 },
            ]}
          >
            <Col xs={{ span: 24 }} xl={{ span: 15 }}>
              <div className="request-medical-appointment__steps">
                <RequestMedicalAppointmentSteps />
              </div>
            </Col>
            <Col xs={{ span: 24 }} xl={{ span: 9 }}>
              <div className="request-medical-appointment__summary">
                <RequestMedicalAppointmentSummary />
              </div>
            </Col>
          </Row>
        </RequestMedicalAppointmentProvider>
      </div>
    </Container>
  );
};

export default React.memo(RequestMedicalAppointment, (prevProps, nextProps) => {
  return prevProps.match.path === nextProps.match.path;
});
