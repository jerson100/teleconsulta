import { Button } from "antd";
import React from "react";

const JeStepsButtonDone = () => {
  return (
    <>
      {current === steps.length - 1 && (
        <Button
          type="primary"
          onClick={() => message.success("Processing complete!")}
        >
          Done
        </Button>
      )}
    </>
  );
};

export default JeStepsButtonDone;
