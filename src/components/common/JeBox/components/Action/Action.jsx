import { Button, Col, Row } from "antd";
import React from "react";
import { EyeOutlined, EditOutlined } from "@ant-design/icons";
import Proptypes from "prop-types";
import "./action.scss";

const Action = ({ textButton, handlePreview, showPreview }) => {
  return (
    <div className="je-box-action">
      <Row justify="space-between" align="middle" gutter={[16, 16]}>
        <Col>
          {showPreview ? (
            <Item
              Icon={<EditOutlined />}
              text="Editar"
              handleClick={handlePreview}
            />
          ) : (
            <Item
              Icon={<EyeOutlined />}
              text="Vista Previa"
              handleClick={handlePreview}
            />
          )}
        </Col>
        <Col>
          {/* <Input type="submit"> */}
          <Button type="primary" htmlType="submit">
            {textButton}
          </Button>
        </Col>
      </Row>
    </div>
  );
};

const Item = ({ text, Icon, handleClick }) => {
  return (
    <div className="je-box-action__item" onClick={handleClick}>
      <span className="je-box-action__icon">{Icon}</span>
      <span className="je-box-action__text">{text}</span>
    </div>
  );
};

Action.propTypes = {
  textButton: Proptypes.string,
  handlePreview: Proptypes.func,
  showPreview: Proptypes.bool,
};

Action.defaultProps = {
  textButton: "Comentar",
  handlePreview: null,
  showPreview: false,
};

export default React.memo(Action);
