import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import "./jeAvatar.scss";

const JeAvatar = ({ src, href, alt, size }) => {
  return (
    <div className="je-avatar">
      <a className="je-avatar__content" href={href}>
        {src ? (
          <Avatar src={src} alt={alt} className="je-avatar__img" />
        ) : (
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
            className="je-avatar__img"
          />
        )}
        {/* <img src={src} alt={alt} className="je-comment-avatar__img" /> */}
      </a>
    </div>
  );
};

JeAvatar.propTypes = {
  src: PropTypes.string,
  href: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf([
    PropTypes.number,
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "xxl",
  ]),
};

JeAvatar.defaultProps = {
  src: null,
  href: "",
  alt: "",
};

export default JeAvatar;
