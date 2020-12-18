import React from "react";
import PropTypes from "prop-types";
import JeTypeUser from "../../../JeTypeUser";
import Text from "../Text";
import "./metadata.scss";
import JeSpace from "../../../JeSpace";

const MetaData = ({ name, date, typeUser, text }) => {
  return (
    <>
      <div className="je-comment-metadata">
        <div className="je-comment-metadata__header">
          <a href="" className="je-comment-metadata__name">
            <b>{name}</b>
          </a>
          {typeUser}
          <time className="je-comment-metadata__time">{date}</time>
        </div>
        <div className="je-comment-metadata__body">{text}</div>
      </div>
      <JeSpace />
    </>
  );
};

MetaData.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  typeUser: PropTypes.instanceOf(JeTypeUser).isRequired,
  text: PropTypes.instanceOf(Text).isRequired,
  //   typeUser: PropTypes.oneOf(["adm", "mod", "us"]),
};

MetaData.defaultProps = {
  //   typeUser: "us",
  children: "",
};

export default MetaData;
