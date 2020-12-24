import React from "react";
import PropTypes from "prop-types";
import Item from "./components/Item";
import classnames from "classnames";
import "./simpleList.scss";

const SimpleList = ({ children, block, direction, className }) => {
  const _className = classnames(
    "simple-list",
    { "simple-list--block": block },
    { "simple-list--inline": !block },
    `simple-list--dir-${direction}`,
    className
  );
  //   const className = `simple-list simple-list--${
  //     block ? "block" : "inline"
  //   } simple-list--dir-${direction}`;
  return <ul className={_className}>{children}</ul>;
};

SimpleList.propTypes = {
  block: PropTypes.bool,
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
  className: PropTypes.string,
};

SimpleList.defaultProps = {
  block: false,
  direction: "vertical",
  className: null,
};

SimpleList.Item = Item;
export default SimpleList;
