import React from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Col, Layout, Row } from "antd";
import "./header.scss";
import NavUser from "../NavUser";
import Container from "../../../../common/Container";

const { Header: HeaderLayout } = Layout;

const Header = ({ toggle, collapsed }) => {
  return (
    <HeaderLayout className="dashboard-user-layout-header">
      <Container maxWidth="xxl">
        <div className="dashboard-user-layout-header__content">
          <Row
            align="middle"
            justify="space-between"
            className="dashboard-user-layout-header__row"
            gutter={[10, 0]}
          >
            <Col>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "dashboard-user-layout-header__button",
                  onClick: toggle,
                }
              )}
            </Col>
            <Col>
              <NavUser />
            </Col>
          </Row>
        </div>
      </Container>
    </HeaderLayout>
  );
};

export default Header;
