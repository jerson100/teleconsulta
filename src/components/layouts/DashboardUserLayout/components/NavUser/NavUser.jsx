import React from "react";

import SimpleList from "../../../../common/SimpleList";

import "./navUser.scss";
import UserAvatar from "./components/UserAvatar";
import Messages from "./components/Messages";
import Notification from "./components/Notification";
import Settings from "./components/Settings";

const NavUser = () => {
  return (
    <nav className="nav-user">
      <SimpleList direction="horizontal" className="nav-user__list">
        <SimpleList.Item>
          <Notification />
        </SimpleList.Item>
        <SimpleList.Item>
          <Messages />
        </SimpleList.Item>
        <SimpleList.Item>
          <Settings />
        </SimpleList.Item>
        <SimpleList.Item>
          <UserAvatar />
        </SimpleList.Item>
      </SimpleList>
    </nav>
  );
};

export default React.memo(NavUser);
