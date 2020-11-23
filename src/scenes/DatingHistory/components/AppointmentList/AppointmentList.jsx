import { Collapse } from "antd";
import React from "react";
import "./appointmentList.scss";

const { Panel } = Collapse;

const AppointmentList = () => {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  return (
    <div className="appointment-list">
      <Collapse accordion expandIconPosition="right">
        <Panel header="This is panel header 1" key="1">
          <p>{text}</p>
          <Collapse accordion ghost>
            <Panel header="This is panel header 1" key="1">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 1" key="2">
              <p>{text}</p>
            </Panel>
            <Panel header="This is panel header 1" key="3">
              <p>{text}</p>
            </Panel>
          </Collapse>
        </Panel>
        <Panel header="This is panel header 2" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="3">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="4">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="5">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="6">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="7">
          <p>{text}</p>
        </Panel>
        <Panel header="This is panel header 3" key="8">
          <p>{text}</p>
        </Panel>
      </Collapse>
      ,
    </div>
  );
};

export default AppointmentList;
