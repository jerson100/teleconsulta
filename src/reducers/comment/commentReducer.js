export const TYPES_COMMENT = {
  ADD: "ADD[COMMENT]",
  SET: "SET[COMMENT]",
  ADD_AND_UPDATE_LIKE: "ADD_AND_UPDATE_LIKE[LIKE]",
  REMOVE_BY_ID: "REMOVEBYID[COMMENT]",
};

export const defaultValues = {
  comments: [],
};

const commentReducer = (state, action) => {
  switch (action.type) {
    case TYPES_COMMENT.ADD:
      return { ...state, comments: [...state.comments, { ...action.payload }] };

    case TYPES_COMMENT.ADD_AND_UPDATE_LIKE:
      return {
        ...state,
        comments: state.comments.map((c) => {
          if (
            c.user.idUser === action.payload.idUser &&
            c.idComment === action.payload.idComment
          ) {
            c.ilike = !c.ilike;
            c.likes += c.ilike ? 1 : -1;
          }
          return c;
        }),
      };
    case TYPES_COMMENT.REMOVE_BY_ID:
      return {
        ...state,
        comments: state.comments.filter((c) => c.id !== action.payload),
      };
    case TYPES_COMMENT.SET:
      return { ...state, comments: [...action.payload] };
    default:
      return state;
  }
};

export default commentReducer;
