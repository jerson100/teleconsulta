import React from "react";
import "./text.scss";

const Text = ({ children }) => {
  return <p className="je-comment-text">{children}</p>;
};

export default React.memo(Text);
