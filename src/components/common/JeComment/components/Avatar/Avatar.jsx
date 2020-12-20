import React from "react";
import PropTypes from "prop-types";
// import { Avatar as Avat } from "antd";
// import { UserOutlined } from "@ant-design/icons";
import "./avatar.scss";
import JeAvatar from "../../../JeAvatar";

const Avatar = ({ src, href, alt }) => {
  return (
    <div className="je-comment-avatar">
      <JeAvatar alt={alt} href={href} src={src} />
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  href: PropTypes.string,
  alt: PropTypes.string,
};

Avatar.defaultProps = {
  src: null,
  href: "",
  alt: "",
};

export default React.memo(Avatar);
