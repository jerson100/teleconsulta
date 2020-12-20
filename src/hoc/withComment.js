import useCommentContext from "../hooks/useCommentContext";
import CommentProvider from "../reducers/comment/CommentProvider";

const widthCommentContext = (Component) => {
  return function (props) {
    return (
      <CommentProvider>
        <Component {...props} />;
      </CommentProvider>
    );
  };
};

export default widthCommentContext;
