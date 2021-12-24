import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import myProfileReducer from "./saga-modules/myProfile/reducer";
import authReducer from "./saga-modules/auth/reducer";
import rootSagas from "./sagas";

const reducer = combineReducers({
  myProfile: myProfileReducer,
  auth: authReducer,
});
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const store = createStore(reducer, {}, applyMiddleware(...middleware));
sagaMiddleware.run(rootSagas);
export default store;
