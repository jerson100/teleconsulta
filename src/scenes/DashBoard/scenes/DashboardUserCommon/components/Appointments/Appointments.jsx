import { Button, Card, Col, Row, Typography } from "antd";
import React from "react";
import JeSection from "../../../../../../components/common/JeSection";
import JeSpace from "../../../../../../components/common/JeSpace";
import "./appointments.scss";
import AppointmentCard from "./components/AppointmentCard";

const Appointments = () => {
  return (
    <JeSection>
      <Card>
        <div className="user-common-dashboard-scene-appointment">
          <Typography.Title level={2}>Mis citas</Typography.Title>
          <JeSpace />
          <div className="user-common-dashboard-scene-appointment__list">
            <Row
              gutter={[
                { xs: 32, sm: 16, xxl: 16 },
                { xs: 32, sm: 16, xxl: 16 },
              ]}
            >
              <Col xs={{ span: 24 }} lg={{ span: 12 }} xxl={{ span: 8 }}>
                <AppointmentCard
                  img="https://jersonramirez.netlify.app/static/media/d4.725609fa.jpg"
                  name="Juan Martelcd"
                  especialty="Neurologo"
                  direction="Lima -xdc"
                  date={new Date()}
                  link=""
                  linkZoom="https://www.google.com.pe"
                  tema="Dolor intenso del estómago"
                />
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }} xxl={{ span: 8 }}>
                <AppointmentCard
                  img="https://jersonramirez.netlify.app/static/media/d4.725609fa.jpg"
                  name="Juan Martelcd"
                  especialty="Neurologo"
                  direction="Lima -xdc"
                  date={new Date()}
                  link=""
                  linkZoom="https://www.google.com.pe"
                  tema="Baja presión "
                />
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }} xxl={{ span: 8 }}>
                <AppointmentCard
                  img="https://jersonramirez.netlify.app/static/media/d4.725609fa.jpg"
                  name="Juan Martelcd"
                  especialty="Neurologo"
                  direction="Lima -xdc"
                  date={new Date()}
                  link=""
                  linkZoom="https://www.google.com.pe"
                  tema="Baja presión "
                />
              </Col>
            </Row>
          </div>
          <JeSpace />
          <div className="user-common-dashboard-scene-appointment__button">
            <Button type="primary">Ver más</Button>
          </div>
        </div>
      </Card>
    </JeSection>
  );
};

export default Appointments;
