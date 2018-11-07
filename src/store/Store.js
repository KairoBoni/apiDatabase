import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger"
import  ApiDatabaseReducer  from '../reducers/ApiDatabaseReducer'
import ApiLoginReducer from '../reducers/ApiLoginReducer'
export default createStore(combineReducers({ ApiDatabaseReducer, ApiLoginReducer}),
    {},
    applyMiddleware(logger)
);