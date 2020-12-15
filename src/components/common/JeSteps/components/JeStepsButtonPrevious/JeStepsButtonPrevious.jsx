import React from "react";
import useJeSteps from "../../hooks/useJeSteps";
import PropTypes from "prop-types";
import { Button } from "antd";

const JeStepsButtonPrevious = ({ handleClick, children }) => {
  const { current, previous } = useJeSteps();
  console.log(current);
  return (
    <>
      {current > 0 && (
        <Button
          type="primary"
          style={{ margin: "0 8px" }}
          onClick={() =>
            handleClick ? handleClick(current, previous) : previous()
          }
        >
          {children}
        </Button>
      )}
    </>
  );
};

JeStepsButtonPrevious.propTypes = {
  handleClick: PropTypes.func,
};

JeStepsButtonPrevious.defaultProps = {
  handleClick: null,
};
export default React.memo(JeStepsButtonPrevious);
