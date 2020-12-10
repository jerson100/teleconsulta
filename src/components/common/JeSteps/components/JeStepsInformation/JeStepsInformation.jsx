import { Steps } from "antd";
import React from "react";
const { Step } = Steps;

const JeStepsInformation = () => {
  return (
    <Steps current={current}>
      {steps.map((item) => (
        <Step key={item.title} title={item.title} />
      ))}
    </Steps>
  );
};

export default JeStepsInformation;
