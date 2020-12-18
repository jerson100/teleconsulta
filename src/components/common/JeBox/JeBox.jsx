import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import Action from "./components/Action";
import Content from "./components/Content";
import "./jeBox.scss";
import JeSpace from "../JeSpace";

const JeBox = ({ placeholder, textButton, handleButton, children }) => {
  const [showPreview, setshowPreview] = useState(false);

  const handlePreview = useCallback(() => {
    setshowPreview((prev) => !prev);
  }, [setshowPreview]);

  return (
    <div className="je-box">
      <form className="je-box__form" onSubmit={handleButton}>
        <Content
          placeHolder={placeholder}
          defaultText={children}
          showPreview={showPreview}
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
  handleButton: PropTypes.func.isRequired,
  textButton: PropTypes.string,
};

JeBox.defaultProps = {
  children: "",
  placeholder: "",
  textButton: "Comentar",
};

export default JeBox;
