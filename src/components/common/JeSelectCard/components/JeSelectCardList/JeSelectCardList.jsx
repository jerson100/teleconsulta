import { AnimateSharedLayout } from "framer-motion";
import React from "react";
import "./jeSelectCardList.scss";

const JeSelectCardList = ({ children }) => {
  return (
    // <AnimateSharedLayout>
    <ul className="je-select-card__list">{children}</ul>
    // </AnimateSharedLayout>
  );
};

export default JeSelectCardList;
