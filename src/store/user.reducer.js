import { USER_ACTION_TYPES } from "./user.action";

const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      //return existing state if this action is not triggered.
      //Redux will then understand there is no re-rendering for this component
      return state;
  }
};
