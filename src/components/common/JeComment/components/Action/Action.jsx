import React from "react";
import Proptypes from "prop-types";
import { LikeOutlined, CommentOutlined } from "@ant-design/icons";
import "./action.scss";
// import JeSpace from "../../../JeSpace";
import SimpleList from "../../../SimpleList";

const Action = ({
  isLike,
  isComment,
  isShare,
  handleLike,
  handleComment,
  handleShare,
}) => {
  return (
    <div className="je-comment-actions">
      <SimpleList direction="horizontal">
        {isLike && (
          <SimpleList.Item>
            <LikeOutlined /> <span className="je-comment-actions__text">0</span>
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
};

Action.defaultProps = {
  isLike: false,
  isComment: false,
  isShare: false,
  handleLike: () => {},
  handleComment: () => {},
  handleShare: () => {},
};

export default Action;
