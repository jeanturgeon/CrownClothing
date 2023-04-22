import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';

import {rootReducer} from './root-reducer';


const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, undefined, composedEnhancers);


//optional second paramater we don't need (for now)
export const store = createStore(rootReducer, undefined, composition); 