import React from "react";
import JeBox from "../../../JeBox";
import PropTypes from "prop-types";
import Avatar from "../Avatar";
import "./box.scss";

const Box = ({ name, img, href, children, handleSubmit }) => {
  return (
    <div className="je-comment-box">
      <Avatar alt={name} href={href} src={img} />
      <div className="je-comment-box__box">
        <JeBox handleSubmit={handleSubmit}>{children}</JeBox>
      </div>
    </div>
  );
};

Box.propTypes = {
  children: PropTypes.string,
  handleSubmit: PropTypes.func,
  name: PropTypes.string.isRequired,
  img: PropTypes.string,
  href: PropTypes.string,
};

Box.defaultProps = {
  children: "",
  handleSubmit: null,
  img: null,
  href: "",
};

export default React.memo(Box);
