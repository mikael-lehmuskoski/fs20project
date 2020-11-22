import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import reducers from "./reducers";

const comboReducer = combineReducers({
  user: reducers.userReducer,
  notification: reducers.notificationReducer,
});

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["user"],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line

const store = createStore(
  persistReducer(persistConfig, comboReducer),
  composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export default {
  store,
  persistor,
};
