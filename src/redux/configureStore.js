import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import myProfileReducer from "./saga-modules/myProfile/reducer";
import authReducer from "./saga-modules/auth/reducer";
import rootSagas from "./sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const reducer = combineReducers({
  myProfile: myProfileReducer,
  auth: authReducer,
});
const persistConfig = {
  key: "root",
  storage,
};
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const persistedReducer = persistReducer(persistConfig, reducer);

export default () => {
  const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  sagaMiddleware.run(rootSagas);

  const persistor = persistStore(store);
  return { store, persistor };
};
