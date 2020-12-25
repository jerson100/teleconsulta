import React from "react";
import { BackTop as BackT } from "antd";
import { CaretUpOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./backtop.scss";

const BackTop = ({ text }) => {
  return (
    <BackT className="je-backtop" style={{ right: "2rem", bottom: "2rem" }}>
      <motion.div
        // animate={{ rotate: [0, 0, -45, -45, 0, 0, 45, 45, 0, 0] }}
        initial={{ y: "200%", opacity: 0, rotate: 0 }}
        animate={{ y: 0, opacity: 1, rotate: 360 }}
        transition={{
          type: "spring",
          stiffness: 1050,
          mass: 1,
        }}
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.1 },
        }}
        className="je-backtop__content"
      >
        <div className="je-backtop__icon">
          <CaretUpOutlined />
        </div>
        {text && <div className="je-backtop__text">Subir</div>}
      </motion.div>
    </BackT>
  );
};

BackTop.propTypes = {
  text: PropTypes.string,
};

BackTop.defaultProps = {
  text: null,
};

export default React.memo(BackTop);
