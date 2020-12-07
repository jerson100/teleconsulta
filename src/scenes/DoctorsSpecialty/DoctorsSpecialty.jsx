import { Card, Col, Row } from "antd";
import React from "react";
import Container from "../../components/common/Container";
import DoctorSpecialty from "./components/DoctorSpecialty/DoctorSpecialty";

const DoctorsSpecialty = () => {
  return (
    <div className="doctors-specialty">
      <Container>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <DoctorSpecialty especialty={"Medicina General"} />
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <DoctorSpecialty especialty={"Medicina General"} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DoctorsSpecialty;
