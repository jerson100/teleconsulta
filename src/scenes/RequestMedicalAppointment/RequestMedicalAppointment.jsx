import React from "react";
import { Helmet } from "react-helmet";
import "./requestMedicalAppointment.scss";
import RequestMedicalAppointmentSteps from "./components/RequestMedicalAppointmentSteps";
import RequestMedicalAppointmentSummary from "./components/RequestMedicalAppointmentSummary/RequestMedicalAppointmentSummary";
import { Col, Row } from "antd";
import RequestMedicalAppointmentProvider from "./providers/RequestMedicalAppointmentProvider";

const RequestMedicalAppointment = () => {
  return (
    <>
      <Helmet>
        <title>Solicitar Cita Médica | teleconsulta</title>
        <meta
          name="description"
          content="Solicita una cita médica con uno de nuestros médicos, que son altamente calificados."
        ></meta>
      </Helmet>

      <div className="request-medical-appointment">
        <RequestMedicalAppointmentProvider>
          <Row
            gutter={[
              { xs: 16, lg: 32 },
              { xs: 16, lg: 32 },
            ]}
          >
            <Col xs={{ span: 24 }} xl={{ span: 18 }}>
              <div className="request-medical-appointment__steps">
                <RequestMedicalAppointmentSteps />
              </div>
            </Col>
            <Col xs={{ span: 24 }} xl={{ span: 6 }}>
              <div className="request-medical-appointment__summary">
                <RequestMedicalAppointmentSummary />
              </div>
            </Col>
          </Row>
        </RequestMedicalAppointmentProvider>
      </div>
    </>
  );
};

export default React.memo(RequestMedicalAppointment, (prevProps, nextProps) => {
  return prevProps.match.path === nextProps.match.path;
});
