import React from "react";
import { Button, Col, Row, Typography } from "antd";
import { useHistory } from "react-router-dom";

import "./notFoundPage.scss";

const { Title } = Typography;

const NotFoundPage = ({ title, url }) => {
  const { push, goBack } = useHistory();
  const handleClick = () => {
    //goBack();
    if (url) {
      push(url);
    } else {
      goBack();
    }
    // goForward();
  };
  return (
    <div className="not-found-page">
      <Row align="middle" style={{ height: "100%" }} justify="center">
        <Col>
          <Title>404</Title>
          <p className="not-found-page__description">La página no existe</p>
          <Button type="primary" onClick={handleClick}>
            {title}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default NotFoundPage;
