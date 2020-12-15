import React from "react";
import { Image } from "antd";
import "./preview.scss";

const Preview = ({ img }) => {
  return (
    <div className="je-drop-zone-preview">
      {img && <Image src={img.preview} className="je-drop-zone-preview__img" />}
    </div>
  );
};

export default Preview;
