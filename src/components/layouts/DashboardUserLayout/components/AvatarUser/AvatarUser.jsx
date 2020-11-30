import React, { memo } from "react";
import PropTypes from "prop-types";
import { Avatar, Image } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { generateColorRgb } from "../../../../../utils/colors";

import "./avatarUser.scss";

/*
    size = number | large | small | default | { xs: number, sm: number, ...}
    size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
*/

const AvatarUser = ({ name, url, size }) => {
  return (
    <div className="avatar-user">
      <span className="avatar-user__avatar">
        {url ? (
          <Avatar src={<Image src={url} alt={name} size={size} />} />
        ) : (
          <Avatar
            style={{ backgroundColor: generateColorRgb(0, 255) }}
            icon={<UserOutlined />}
            name={name}
            size={size}
          />
        )}
      </span>
    </div>
  );
};

AvatarUser.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object,
  ]),
};

AvatarUser.defaultProps = {
  url: null,
  name: "Imagen de un usuario por defecto",
  size: 32,
};

export default memo(AvatarUser);
