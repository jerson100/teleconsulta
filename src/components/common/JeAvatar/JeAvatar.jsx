import React from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./jeAvatar.scss";

const JeAvatar = ({ src, href, alt, size, className, user }) => {
  const classAvatar = classnames(
    "je-avatar__img",
    `je-avatar__img--size-${size}`,
    className
  );
  return (
    <div className="je-avatar">
      <a className="je-avatar__content" href={href}>
        {src ? (
          <Avatar src={src} alt={alt} className={classAvatar} />
        ) : (
          <Avatar
            style={{ backgroundColor: "#87d068" }}
            icon={<UserOutlined />}
            className={classAvatar}
          />
        )}
        {user && (
          <span
            className="je-avatar__user"
            style={{ maxWidth: user.maxWidth && `${user.maxWidth}px` }}
          >
            {user.name}
          </span>
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
  className: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    maxWidth: PropTypes.number,
  }),
};

JeAvatar.defaultProps = {
  src: null,
  href: "",
  alt: "",
  size: "sm",
  className: "",
  user: null,
};

export default JeAvatar;
