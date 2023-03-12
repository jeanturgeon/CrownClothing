export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

export const setCurrentUser = (user) => {
  //creating Action
  return {
    type: USER_ACTION_TYPES.SET_CURRENT_USER,
    payload: user,
  };
};

export const selectCurrentUser = () => (state) => state.user.currentUser;
