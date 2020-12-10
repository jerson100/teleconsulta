import React from "react";
import JeStepsButtonDone from "./components/JeStepsButtonDone";
import JeStepsButtonNext from "./components/JeStepsButtonNext";
import JeStepsButtonPrevious from "./components/JeStepsButtonPrevious";
import JeStepsContent from "./components/JeStepsContent";
import JeStepsGroup from "./components/JeStepsGroup";
import JeStepsProvider from "./provider/JeStepsProvider";

const JeSteps = ({ children }) => {
  return (
    <div className="je-steps">
      <JeStepsProvider>
        {children}
        {/* <JeStepsInformation /> */}
        {/* <div className="je-steps__content">{steps[current].content}</div> */}
        {/* <div className="steps-action"></div> */}
      </JeStepsProvider>
    </div>
  );
};

// JeSteps.useJeSteps = useJeSteps;
JeSteps.JeStepsButtonNext = JeStepsButtonNext;
JeSteps.JeStepsButtonPrevious = JeStepsButtonPrevious;
JeSteps.JeStepsButtonDone = JeStepsButtonDone;
JeSteps.JeStepsContent = JeStepsContent;
JeSteps.JeStepsGroup = JeStepsGroup;

export default JeSteps;
