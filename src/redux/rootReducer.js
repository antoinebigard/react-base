import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const appState = {};

export default history =>
  combineReducers({
    router: connectRouter(history),
    ...appState,
  });
