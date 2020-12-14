import { motion } from "framer-motion";
import React, { useState } from "react";
import useJeSelectCardContext from "../../hooks/useJeSelectCard";
import "./jeSelectCardItem.scss";

const JeSelectCardItem = ({ title, selectKey }) => {
  if (!selectKey) {
    throw new Error("selectKey prop is required");
  }
  const { select, current } = useJeSelectCardContext();
  return (
    <motion.li
      transition={{ type: "spring", duration: 0.1 }}
      whileHover={{
        scale: 1.1,
      }}
      className={`je-select-card__item ${
        current === selectKey ? "je-select-card__item--selected" : ""
      }`}
      onClick={() => current !== selectKey && select(selectKey)}
    >
      <img
        src="https://jersonramirez.netlify.app/static/media/d2.6a3bdcfa.jpg"
        alt="especialidades"
        className="je-select-card__img"
      />
      <p className="je-select-card__title">{title}</p>
    </motion.li>
  );
};

export default JeSelectCardItem;