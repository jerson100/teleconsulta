export const JE_SELECT_CARD_TYPES = {
  SELECT: "select",
};

export const JeSelectCardDefaultValues = {
  current: 0,
};

const jeSelectCardReducer = (state, action) => {
  switch (action.type) {
    case JE_SELECT_CARD_TYPES.SELECT:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};

export default jeSelectCardReducer;
