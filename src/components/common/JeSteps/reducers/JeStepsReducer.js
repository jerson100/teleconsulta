export const ACTIONJESTEPS = {
  NEXT: "next",
  PREVIOUS: "previous",
  STEPS: "steps",
};

export const defaultValuesJeSteps = {
  current: 0,
  steps: 0,
};

export const JeStepsReducer = (state, action) => {
  switch (action.type) {
    case ACTIONJESTEPS.NEXT:
      return {
        ...state,
        current: state.current + 1,
      };
    case ACTIONJESTEPS.PREVIOUS:
      return {
        ...state,
        current: state.current - 1,
      };
    case ACTIONJESTEPS.STEPS:
      return {
        ...state,
        steps: action.payload,
      };
    default:
      return state;
  }
};
