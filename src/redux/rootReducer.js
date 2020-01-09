import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import testReducer from "./TestAsync/reducer";

const appState = {
  user: testReducer,
};

export default history =>
  combineReducers({
    router: connectRouter(history),
    ...appState,
  });
