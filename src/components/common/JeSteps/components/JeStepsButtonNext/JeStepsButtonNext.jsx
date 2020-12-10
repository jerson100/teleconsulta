import { Button } from "antd";
import React from "react";
import useJeSteps from "../../hooks/useJeSteps";

const JeStepsButtonNext = () => {
  const { current, steps, next } = useJeSteps();
  return (
    <>
      {current < steps - 1 && (
        <Button type="primary" onClick={() => next}>
          Next
        </Button>
      )}
    </>
  );
};

export default JeStepsButtonNext;
