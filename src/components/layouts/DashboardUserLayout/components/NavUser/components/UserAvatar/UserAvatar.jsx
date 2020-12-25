import React from "react";
import { Dropdown, Menu } from "antd";
import {
  DownOutlined,
  CloseOutlined,
  UserOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import JeAvatar from "../../../../../../common/JeAvatar";
import { Link } from "react-router-dom";

const menu = (
  <Menu>
    <Menu.Item icon={<UserOutlined />}>Perfil</Menu.Item>
    <Menu.Item icon={<SettingOutlined />}>Configuración</Menu.Item>
    <Menu.Item icon={<CloseOutlined />}>
      <Link to="/auth/login">Cerrar Sesión</Link>
    </Menu.Item>
  </Menu>
);

const UserAvatar = () => {
  return (
    <Dropdown overlay={menu} placement="bottomRight" arrow>
      <div className="nav-user__item">
        <div className="nav-user__avatar">
          <JeAvatar
            user={{
              name: "Jerson Ramírez",
              maxWidth: 150,
            }}
            alt="Jerson Ramírez Ortiz"
            isHref={false}
            // href="https://www.facebook.com/jersonomar.ramirezortiz"
            src="https://scontent.flim12-1.fna.fbcdn.net/v/t1.0-9/132685880_3509582365823521_62185100342858390_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=p5AiB3UZs_cAX84Apfg&_nc_ht=scontent.flim12-1.fna&oh=0e4eca46b4fd60c9bd616482d058bbcf&oe=60099EEE"
          />
          <DownOutlined className="nav-user__icon-bottom" />
        </div>
      </div>
    </Dropdown>
  );
};

export default UserAvatar;
