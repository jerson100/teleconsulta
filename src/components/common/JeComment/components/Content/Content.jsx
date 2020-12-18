import React from "react";
import PropTypes from "prop-types";
import MetaData from "../MetaData";
import Text from "../Text";
import "./content.scss";

const Content = ({ children }) => {
  return <div className="je-comment-content">{children}</div>;
};

Content.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.instanceOf(MetaData),
      PropTypes.instanceOf(Text),
    ])
  ).isRequired,
};

export default Content;
