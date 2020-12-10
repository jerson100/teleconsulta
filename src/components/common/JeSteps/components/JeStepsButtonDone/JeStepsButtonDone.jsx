import { Button } from "antd";
import React from "react";
import useJeSelectCardContext from "../../../JeSelectCard/hooks/useJeSelectCard";

const JeStepsButtonDone = () => {
  const { current, steps } = useJeSelectCardContext();
  return (
    <>
      {current === steps.length - 1 && (
        <Button type="primary" onClick={() => console.log("done!...")}>
          Done
        </Button>
      )}
    </>
  );
};

export default JeStepsButtonDone;
