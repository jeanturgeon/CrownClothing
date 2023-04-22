import {combineReducers} from 'redux';

import {userReducer} from './reducers/user.reducer';
import {categoriesReducer} from './reducers/categories.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
});