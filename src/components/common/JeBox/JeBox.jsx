import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Action from "./components/Action";
import Content from "./components/Content";
import "./jeBox.scss";
import JeSpace from "../JeSpace";

const JeBox = ({ placeholder, textButton, handleSubmit, children }) => {
  const [showPreview, setshowPreview] = useState(false);
  const [text, settext] = useState(children);

  const handlePreview = useCallback(() => {
    setshowPreview((prev) => !prev);
  }, [setshowPreview]);

  const handleSubm = (e) => {
    e.preventDefault();
    if (handleSubmit) {
      handleSubmit(text, settext);
    }
  };
  return (
    <div className="je-box">
      <form className="je-box__form" onSubmit={handleSubm}>
        <Content
          placeHolder={placeholder}
          defaultText={children}
          showPreview={showPreview}
          settext={settext}
          text={text}
        />
        <JeSpace />
        <Action
          textButton={textButton}
          handlePreview={handlePreview}
          showPreview={showPreview}
        />
      </form>
    </div>
  );
};

JeBox.propTypes = {
  children: PropTypes.string,
  placeHolder: PropTypes.string,
  handleSubmit: PropTypes.func,
  textButton: PropTypes.string,
};

JeBox.defaultProps = {
  children: "",
  placeholder: "",
  textButton: "Comentar",
  handleSubmit: null,
};

export default JeBox;
