import React, { useEffect, useRef } from "react";
import "./editor.scss";

const Editor = ({ placeholder, children, setText, setexpanded }) => {
  const textarea = useRef();

  const handleClick = () => {
    setexpanded(true);
  };

  useEffect(() => {
    //modficar luego...
    textarea.current.focus();
  }, []);

  return (
    <div className="je-box-editor">
      <textarea
        ref={textarea}
        className="je-box-editor__textarea"
        placeholder={placeholder}
        onClick={handleClick}
        // defaultValue={children}
        value={children}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </div>
  );
};

export default Editor;
