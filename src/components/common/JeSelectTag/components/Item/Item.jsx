import { Tag } from "antd";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";
import "./item.scss";

const variantsChild = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Item = ({ i, isSelected, setselectItem, children, color }) => {
  const className = `je-select-tag-item ${
    isSelected ? "je-select-tag-item--active" : ""
  }`;
  //   console.log(color);
  return (
    <motion.li
      className={className}
      variants={variantsChild}
      custom={i}
      style={{ display: "inline-block" }}
      onClick={() => setselectItem(i)}
      //   key={h}
    >
      <Tag
        color={color}
        className="je-select-tag-item__tag"
        icon={isSelected ? <CheckCircleOutlined /> : null}
      >
        {children}
      </Tag>
    </motion.li>
  );
};

Item.propTypes = {
  color: PropTypes.string,
};

Item.defaultProps = {
  color: "purple",
};

export default React.memo(Item);
