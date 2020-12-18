import React from "react";
import Proptypes from "prop-types";
// import { UserOutlined } from "@ant-design/icons";
import "./jeTypeUser.scss";

const JeTypeUser = ({ typeUser, isIcon }) => {
  let icon = null;
  switch (typeUser) {
    case "adm":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>user-tie</title>
          <path d="M10 6c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6zM24.002 14h-1.107l-6.222 12.633 2.327-11.633-3-3-3 3 2.327 11.633-6.222-12.633h-1.107c-3.998 0-3.998 2.687-3.998 6v10h24v-10c0-3.313 0-6-3.998-6z" />
        </svg>
      );
      break;
    case "mod":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <title>remove_moderator</title>
          <path d="M19.688 16.594l-13.172-13.172 5.484-2.438 9 4.031v6q0 2.859-1.313 5.578zM22.266 21.75l-1.266 1.266-3.422-3.422q-2.438 2.672-5.578 3.422-3.844-0.938-6.422-4.383t-2.578-7.617v-6l-2.016-2.016 1.266-1.266 5.203 5.203t6.094 6.070 5.203 5.18z" />
        </svg>
      );
      break;
    case "us":
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <title>user</title>
          <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z" />
        </svg>
      );

      break;
  }
  return (
    <div className="je-type-user">
      <div className="je-type-user__icon">{isIcon && icon}</div>
      <div className="je-type-user__text">{typeUser} </div>
    </div>
  );
};

JeTypeUser.propTypes = {
  typeUser: Proptypes.oneOf(["adm", "mod", "us"]),
};

JeTypeUser.defaultProps = {
  typeUser: "us",
};

export default JeTypeUser;
