import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createStore } from "redux";
import reducer from "../reducers";

export const store = createStore(reducer, applyMiddleware(thunk, logger));
