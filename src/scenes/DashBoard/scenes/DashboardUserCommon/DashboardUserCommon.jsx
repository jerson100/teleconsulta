import { Affix, Col, Row, Typography } from "antd";
import React from "react";
import Container from "../../../../components/common/Container";
import JeSpace from "../../../../components/common/JeSpace";
import Appointments from "./components/Appointments";
import Banner from "./components/Banner/Banner";
import Calendar from "./components/Calendar";
import Graphics from "./components/Graphics";
import States from "./components/States";
import Temperature from "./components/Temperature";

const DashboardUserCommon = () => {
  return (
    <div className="user-common-dashboard-scene">
      <Container maxWidth="xxl">
        <JeSpace size="sm" />
        <Typography.Title level={1}>Dashboard</Typography.Title>
        <JeSpace size="sm" />
        <Row gutter={[{ xl: 64 }, { xl: 64 }]}>
          <Col xs={{ span: 24 }} xl={{ span: 16 }} xxl={{ span: 17 }}>
            <Banner />
            <JeSpace size="sm" />
            <States />
            <Graphics />
            {/* <JeSpace size="sm" /> */}
            <Appointments />
          </Col>
          <Col xs={{ span: 24 }} xl={{ span: 8 }} xxl={{ span: 7 }}>
            <div style={{ height: "100%" }}>
              <Affix offsetTop={70}>
                <div>
                  <Temperature grades="22" locale="Lima - Perú" />
                  <JeSpace size="sm" />
                  <Calendar />
                </div>
              </Affix>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DashboardUserCommon;
