import React, { useCallback, useReducer } from "react";
import {
  JeStepsReducer,
  defaultValuesJeSteps,
  ACTIONJESTEPS,
} from "../reducers/JeStepsReducer";

export const JeStepsContext = React.createContext();

const JeStepsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(JeStepsReducer, defaultValuesJeSteps);
  const next = useCallback(() => {
    console.log("next");
    dispatch({
      type: ACTIONJESTEPS.NEXT,
    });
  }, []);

  const previous = useCallback(() => {
    dispatch({
      type: ACTIONJESTEPS.PREVIOUS,
    });
  }, []);

  const setSteps = useCallback((steps) => {
    dispatch({
      type: ACTIONJESTEPS.STEPS,
      payload: steps,
    });
  }, []);

  return (
    <JeStepsContext.Provider
      value={{
        current: state.current,
        next,
        previous,
        setSteps,
        steps: state.steps,
      }}
    >
      {children}
    </JeStepsContext.Provider>
  );
};

export default JeStepsProvider;
