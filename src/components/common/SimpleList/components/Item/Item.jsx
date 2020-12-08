import React from "react";
import "./simpleListItem.scss";

const Item = ({ children }) => {
  return <li className="simple-list__item">{children}</li>;
};

export default Item;
