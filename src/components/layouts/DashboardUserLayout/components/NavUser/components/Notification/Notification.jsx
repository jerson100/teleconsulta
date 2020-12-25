import React from "react";
import { Badge } from "antd";
import { BellOutlined } from "@ant-design/icons";

const Notification = () => {
  return (
    <div className="nav-user__item">
      <Badge count={5}>
        <div className="nav-user__icon">
          <BellOutlined />
        </div>
      </Badge>
    </div>
  );
};

export default Notification;
