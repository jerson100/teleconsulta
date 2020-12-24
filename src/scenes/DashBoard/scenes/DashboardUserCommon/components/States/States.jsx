import { Col, Row } from "antd";
import React from "react";
import State from "../../../../../../components/common/State";
import {
  CommentDetailIcon,
  MoneylIcon,
  PlusMedicalIcon,
} from "../../../../../../utils/svg";

const States = () => {
  return (
    // <div className="user-common-dashboard-scene-states">
    <Row gutter={[32, 32]}>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
        <State
          label="Citasssssssssssssssssssssssssssss"
          text="5000000000000000000000000"
          Icon={<PlusMedicalIcon />}
          style={{
            background: "linear-gradient(to right, #cc2b5e, #753a88)",
            color: "#fff",
          }}
        />
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
        <State
          label="Comentarios"
          text="150"
          Icon={<CommentDetailIcon />}
          style={{
            background: "linear-gradient(to right, #ed213a, #93291e)",
            color: "#fff",
          }}
        />
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
        <State
          label="Gasto Total"
          text="$600"
          Icon={<MoneylIcon />}
          style={{
            background:
              "linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)",
            color: "#fff",
          }}
        />
      </Col>
    </Row>
    // </div>
  );
};

export default States;
