import React, { useCallback, useReducer } from "react";
import jeSelectCardReducer, {
  JeSelectCardDefaultValues,
  JE_SELECT_CARD_TYPES,
} from "../reducer/jeSelectCardReducer";

export const JeSelectCardContext = React.createContext();

const JeSelectCardProvider = ({ onChange, children }) => {
  const [state, dispatch] = useReducer(
    jeSelectCardReducer,
    JeSelectCardDefaultValues
  );
  const select = useCallback((key) => {
    dispatch({
      type: JE_SELECT_CARD_TYPES.SELECT,
      payload: key,
    });
    onChange(key);
  }, []);
  return (
    <JeSelectCardContext.Provider value={{ select, current: state.current }}>
      {children}
    </JeSelectCardContext.Provider>
  );
};

export default JeSelectCardProvider;
