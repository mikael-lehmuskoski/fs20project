import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// TODO: reducers
import userReducer from "./reducers/reducer";

// might only need one reducer if user details are sent with token on login anyway
const reducer = combineReducers({
  userReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
