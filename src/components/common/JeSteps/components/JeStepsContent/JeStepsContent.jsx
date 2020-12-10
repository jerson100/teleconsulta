import React from "react";
import useJeSteps from "../../hooks/useJeSteps";
import "./jeStepsContent.scss";

const JeStepsContent = ({ children }) => {
  const { current } = useJeSteps();
  const childs = React.Children.toArray(children);
  return <div className="je-steps-content">{childs[current]}</div>;
};

export default JeStepsContent;
