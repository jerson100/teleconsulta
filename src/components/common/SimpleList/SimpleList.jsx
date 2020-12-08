import React from "react";
import PropTypes from "prop-types";
import Item from "./components/Item";
import "./simpleList.scss";

const SimpleList = ({ children, block, direction }) => {
  const className = `simple-list simple-list--${
    block ? "block" : "inline"
  } simple-list--dir-${direction}`;
  return <ul className={className}>{children}</ul>;
};

SimpleList.propTypes = {
  block: PropTypes.bool,
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
};

SimpleList.defaultProps = {
  block: false,
  direction: "vertical",
};

SimpleList.Item = Item;
export default SimpleList;