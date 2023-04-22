import { createAction } from "./reducers-util";

const CATEGORIES_TYPES = {
  SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP",
};

export const CATEGORIES_INTIAL_STATE = {
  categoriesMap: {},
};

export const categoriesReducer = (state = CATEGORIES_INTIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_TYPES.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      return state;
  }
};

export const setCategoriesMap = (categoriesMap) => createAction(CATEGORIES_TYPES.SET_CATEGORIES_MAP, categoriesMap);

export const selectCategories = (state) => state.categories.categoriesMap;
