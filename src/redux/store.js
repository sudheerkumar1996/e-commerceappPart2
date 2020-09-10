
import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore } from 'redux-persist';
const middleWares = [] ;//array

if(process.env.NODE_ENV === 'development'){
   middleWares.push(logger);
}//it works when we use local server to run project middleware push the logger 

export const store = createStore(rootReducer,applyMiddleware(...middleWares));
export const persistor = persistStore(store);
export default {store,persistor};