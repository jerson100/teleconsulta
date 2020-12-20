import React, { createContext, useCallback, useReducer } from "react";
import commentReducer, { defaultValues, TYPES_COMMENT } from "./commentReducer";

export const CommentContext = createContext();

const CommentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(commentReducer, defaultValues);
  const addComment = useCallback((comment) => {
    dispatch({
      type: TYPES_COMMENT.ADD,
      payload: comment,
    });
  }, []);
  const removeCommentById = useCallback((id) => {
    dispatch({
      type: TYPES_COMMENT.REMOVE_BY_ID,
      payload: id,
    });
  }, []);
  const setComments = useCallback((comments) => {
    dispatch({
      type: TYPES_COMMENT.SET,
      payload: comments,
    });
  }, []);

  const addUpdateLike = useCallback((idComment, idUser) => {
    dispatch({
      type: TYPES_COMMENT.ADD_AND_UPDATE_LIKE,
      payload: {
        idUser,
        idComment,
      },
    });
  }, []);
  return (
    <CommentContext.Provider
      value={{
        setComments,
        addComment,
        removeCommentById,
        addUpdateLike,
        comments: state.comments,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};

export default CommentProvider;
