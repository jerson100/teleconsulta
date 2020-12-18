import React from "react";
import Action from "./components/Action";
import Avatar from "./components/Avatar";
import Content from "./components/Content";
import MetaData from "./components/MetaData";
import Text from "./components/Text";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./jeComment.scss";
import Box from "./components/Box";

const JeComment = ({ children, isLine }) => {
  const className = classnames("je-comment", { "je-comment--line": isLine });

  return <div className={className}>{children}</div>;
};

JeComment.propTypes = {
  isLine: PropTypes.bool,
};

JeComment.defaultProps = {
  isLine: false,
};

JeComment.Avatar = Avatar;
JeComment.Content = Content;
JeComment.MetaData = MetaData;
JeComment.Text = Text;
JeComment.Action = Action;
JeComment.Box = Box;

export default JeComment;
