import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

const reducers = combineReducers({
  user: reducer.reducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
