import { Steps } from "antd";
import React, { useEffect, useMemo } from "react";
import useJeSteps from "../../hooks/useJeSteps";
import JeStepsItem from "../JeStepsItem";
import "./jeStepsGroup.scss";

const { Step } = Steps;

const JeStepsGroup = ({ children }) => {
  const { setSteps, current } = useJeSteps();

  const steps = useMemo(() => {
    console.log(React.Children.toArray(children));
    return React.Children.toArray(children).map((component) => {
      if (component.type.name !== "JeStepsItem")
        throw new Error(
          "Solo se admite como hijo directo un componente de tipo JeStepsItem"
        );
      return component;
    });
  }, [children]);

  useEffect(() => {
    setSteps(steps.length);
  }, [steps, setSteps]);

  return (
    <div className="je-steps-group">
      <Steps current={current}>
        {steps.map((c, i) => (
          <Step key={i} title={c}></Step>
        ))}
      </Steps>
    </div>
  );
};

JeStepsGroup.JeStepsItem = JeStepsItem;

export default JeStepsGroup;
