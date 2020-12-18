import React from "react";
import ReactMarkdown from "react-markdown";
// import gfm from "remark-gfm";
import "./preview.scss";

const Preview = ({ children, expanded }) => {
  return (
    <div className="je-box-preview">
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  );
};

export default React.memo(Preview);
