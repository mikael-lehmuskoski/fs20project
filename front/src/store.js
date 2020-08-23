import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// reducers here

const reducer = combineReducers({
  reducer: "Reducer",
  another: "anotherReducer",
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
