import React from "react";

const JeStepsButtonPrevious = () => {
  return (
    <>
      {current > 0 && (
        <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
          Previous
        </Button>
      )}
    </>
  );
};

export default JeStepsButtonPrevious;
