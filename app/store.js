import { createStore, applyMiddleware } from "redux";
import playersReducer from "./playersReducer";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import axios from "axios";

const store = createStore(
  playersReducer,
  applyMiddleware(thunkMiddleware.withExtraArgument({ axios }), createLogger())
);

export default store;
