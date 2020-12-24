import React from "react";
import {
  DownOutlined,
  MessageOutlined,
  NotificationOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import JeAvatar from "../../../../common/JeAvatar/JeAvatar";
import SimpleList from "../../../../common/SimpleList";

import "./navUser.scss";
import { Badge } from "antd";

const NavUser = () => {
  return (
    <nav className="nav-user">
      <SimpleList direction="horizontal" className="nav-user__list">
        <SimpleList.Item>
          <Badge count={5}>
            <div className="nav-user__icon">
              <NotificationOutlined />
            </div>
          </Badge>
        </SimpleList.Item>
        <SimpleList.Item>
          <Badge count={50}>
            <div className="nav-user__icon">
              <MessageOutlined />
            </div>
          </Badge>
        </SimpleList.Item>
        <SimpleList.Item>
          <div className="nav-user__icon">
            <SettingOutlined />
          </div>
        </SimpleList.Item>
        <SimpleList.Item>
          <div className="nav-user__avatar">
            <JeAvatar
              user={{
                name: "Jerson Ramírez",
                maxWidth: 150,
              }}
              alt="Jerson Ramírez Ortiz"
              href="https://www.facebook.com/jersonomar.ramirezortiz"
              src="https://scontent.flim12-1.fna.fbcdn.net/v/t1.0-9/132685880_3509582365823521_62185100342858390_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=p5AiB3UZs_cAX84Apfg&_nc_ht=scontent.flim12-1.fna&oh=0e4eca46b4fd60c9bd616482d058bbcf&oe=60099EEE"
            />
            <DownOutlined className="nav-user__icon-bottom" />
          </div>
        </SimpleList.Item>
      </SimpleList>
    </nav>
  );
};

export default React.memo(NavUser);
