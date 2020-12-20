import { useContext } from "react";
import { CommentContext } from "../reducers/comment/CommentProvider";

const useCommentContext = () => {
  const context = useContext(CommentContext);
  if (!context) {
    throw new Error("No se puede acceder al contexto del CommentProvider");
  }
  return context;
};

export default useCommentContext;
