import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

//runs before an action hits the reducer, whenever an action is dispatched
const middleWares = [logger];
const composition = compose(applyMiddleware(...middleWares));

//optional second paramater we don't need (for now)
export const store = createStore(rootReducer, undefined, composition); 