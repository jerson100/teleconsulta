import React, { useMemo, useState } from "react";
import Editor from "../Editor";
import Preview from "../Preview";
import classnames from "classnames";
import "./content.scss";

const Content = ({
  placeholder,
  defaultText,
  showPreview,
  //   handleSubmit = () => {},
}) => {
  const [text, settext] = useState(defaultText);
  const [expanded, setexpanded] = useState(false);

  const className = useMemo(() => {
    return classnames("je-box-content", {
      "je-box-content--expanded": expanded,
    });
  }, [expanded]);

  return (
    <div className={className}>
      {!showPreview && (
        <Editor
          placeholder={placeholder}
          setText={settext}
          setexpanded={setexpanded}
        >
          {text}
        </Editor>
      )}
      {showPreview && <Preview>{text}</Preview>}
    </div>
  );
};

export default React.memo(Content);
