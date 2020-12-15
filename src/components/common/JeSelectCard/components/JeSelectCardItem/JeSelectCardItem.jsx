import { motion } from "framer-motion";
import React from "react";
import PropTypes from "prop-types";
import useJeSelectCardContext from "../../hooks/useJeSelectCard";
import "./jeSelectCardItem.scss";

const JeSelectCardItem = ({ title, selectKey, img }) => {
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
      {img && (
        <img src={img} alt="especialidades" className="je-select-card__img" />
      )}
      <p className="je-select-card__title">{title}</p>
    </motion.li>
  );
};

JeSelectCardItem.propTypes = {
  title: PropTypes.string,
  selectKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  img: PropTypes.string,
};

JeSelectCardItem.defaultProps = {
  title: "",
  img: null,
};

export default JeSelectCardItem;
