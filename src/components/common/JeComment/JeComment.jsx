import React from "react";
import Avatar from "./components/Avatar";
import MetaData from "./components/MetaData";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./jeComment.scss";
import Action from "./components/Action";

const JeComment = ({
  isLine,
  user,
  date,
  text,
  id,
  ilike,
  countLikes,
  action,
}) => {
  const className = classnames("je-comment", { "je-comment--line": isLine });

  return (
    <div className={className}>
      <Avatar src={user.img} alt={user.name} />
      <div className="je-comment__content">
        <MetaData
          name={user.name}
          typeUser={user.typeUser}
          date={date}
          text={text}
        />
        <Action
          id={id}
          isLike={action.isLike}
          ilike={ilike}
          countLikes={countLikes}
          handleLike={action.handleLike}
        />
      </div>
    </div>
  );
};

JeComment.propTypes = {
  isLine: PropTypes.bool,
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string,
    typeUser: PropTypes.string,
  }),
  date: PropTypes.string.isRequired,
  text: PropTypes.string,
  id: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  ilike: PropTypes.bool,
  countLikes: PropTypes.number,
  action: PropTypes.shape({
    isLike: PropTypes.bool,
    handleLike: PropTypes.func,
  }),
};

JeComment.defaultProps = {
  isLine: false,
  user: {
    img: "",
    typeUser: "us",
  },
  text: "",
  ilike: false,
  countLikes: 0,
  action: {
    isLike: true,
    handleLike: () => {},
  },
};

export default React.memo(JeComment, (prev, current) => {
  const prevUser = prev.user;
  const currentUser = prev.user;
  if (
    // prevUser === currentUser &&
    prevUser.name === currentUser.name &&
    prevUser.img === currentUser.img &&
    prevUser.typeUser === currentUser.typeUser &&
    prev.isLine === current.isLine &&
    prev.date === current.date &&
    prev.text === current.text &&
    prev.id === current.id &&
    prev.ilike === current.ilike &&
    prev.countLikes === current.countLikes &&
    // prev.action === current.action
    prev.action.isLike === current.action.isLike &&
    prev.action.handleLike === current.action.handleLike
  ) {
    return true;
  }
  return false;
  //   console.log(prev);
  //   console.log(current);
});
