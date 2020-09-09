
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore } from 'redux-persist';
const middleWares = [logger] ;//array

if(process.env.NODE_ENV === 'development'){
    midlewares.push(logger);
}

export const store = createStore(rootReducer,applyMiddleware(...middleWares));
export const persistor = persistStore(store);
export default {store,persistor};