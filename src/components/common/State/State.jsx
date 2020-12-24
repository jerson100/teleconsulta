import { Card, Col, Row } from "antd";
import { DashboardOutlined } from "@ant-design/icons";
import React from "react";
import PropTypes from "prop-types";
import "./state.scss";
import JeSpace from "../JeSpace";

const State = ({ text, label, Icon, style, bordered }) => {
  // const car =
  return (
    <Card className="state" style={style && style} bordered={bordered}>
      <Row justify="space-between" align="middle">
        <Col flex="0  0 150px" className="state__content">
          <div className="state__description">
            <span className="state__text">{text}</span>
            <span className="state__label">{label}</span>
          </div>
        </Col>
        <Col className="state__icon">{Icon}</Col>
      </Row>
    </Card>
  );
};

State.propTypes = {
  text: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  bordered: PropTypes.bool,
};

State.defaultProps = {
  text: "0",
  label: "default",
  Icon: <DashboardOutlined />,
  style: null,
  bordered: true,
};

export default State;
