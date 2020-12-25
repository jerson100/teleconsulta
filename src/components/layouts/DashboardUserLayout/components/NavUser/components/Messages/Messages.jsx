import { Badge } from "antd";
import React from "react";
import { MessageOutlined } from "@ant-design/icons";

const Messages = () => {
  return (
    <div className="nav-user__item">
      <Badge count={50}>
        <div className="nav-user__icon">
          <MessageOutlined />
        </div>
      </Badge>
    </div>
  );
};

export default Messages;
