import React from "react";
import Proptypes from "prop-types";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
import "./action.scss";
// import JeSpace from "../../../JeSpace";
import SimpleList from "../../../SimpleList";

const Action = ({
  id,
  isLike,
  isComment,
  isShare,
  handleLike,
  handleComment,
  handleShare,
  countLikes,
  ilike,
}) => {
  return (
    <div className="je-comment-actions">
      <SimpleList direction="horizontal">
        {isLike && (
          <SimpleList.Item>
            <LikeOutlined
              onClick={() => handleLike(id)}
              className={`je-comment-actions__like ${
                ilike ? "je-comment-actions__like--active" : ""
              }`}
            />{" "}
            <span className="je-comment-actions__text">{countLikes}</span>
          </SimpleList.Item>
        )}
        {isComment && (
          <SimpleList.Item>
            <CommentOutlined />{" "}
            <span className="je-comment-actions__text">Responder</span>
          </SimpleList.Item>
        )}
      </SimpleList>
    </div>
  );
};

Action.propTypes = {
  isLike: Proptypes.bool,
  isComment: Proptypes.bool,
  isShare: Proptypes.bool,
  handleLike: Proptypes.func,
  handleComment: Proptypes.func,
  handleShare: Proptypes.func,
  countLikes: Proptypes.number,
  ilike: Proptypes.bool,
};

Action.defaultProps = {
  isLike: false,
  ilike: false,
  isComment: false,
  isShare: false,
  handleLike: () => {},
  handleComment: () => {},
  handleShare: () => {},
  countLikes: 0,
};

export default React.memo(Action);
