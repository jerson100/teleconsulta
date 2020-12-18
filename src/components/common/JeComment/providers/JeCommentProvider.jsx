import React from "react";

export const JeCommentContext = React.createContext();

const JeCommentProvider = ({ children }) => {
  return <JeCommentContext.Provider>{children}</JeCommentContext.Provider>;
};

export default JeCommentProvider;
