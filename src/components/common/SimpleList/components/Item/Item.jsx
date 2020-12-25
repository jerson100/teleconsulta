import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./simpleListItem.scss";

const Item = ({ children, className }) => {
  const _className = classnames("simple-list__item", className);
  return <li className={_className}>{children}</li>;
};

Item.propTypes = {
  className: PropTypes.string,
};

Item.defaultProps = {
  className: null,
};

export default React.memo(Item);
