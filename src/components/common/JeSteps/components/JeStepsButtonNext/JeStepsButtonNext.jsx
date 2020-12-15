import { Button } from "antd";
import React from "react";
import useJeSteps from "../../hooks/useJeSteps";
import PropTypes from "prop-types";

const JeStepsButtonNext = ({ handleClick, children }) => {
  const { current, steps, next } = useJeSteps();
  return (
    <>
      {current < steps - 1 && (
        <Button
          type="primary"
          onClick={() => (handleClick ? handleClick(current, next) : next())}
        >
          {children}
        </Button>
      )}
    </>
  );
};

JeStepsButtonNext.propTypes = {
  handleClick: PropTypes.func,
};

JeStepsButtonNext.defaultProps = {
  handleClick: null,
};

export default React.memo(JeStepsButtonNext);
