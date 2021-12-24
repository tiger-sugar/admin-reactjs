import { all } from "redux-saga/effects";
import authSaga from "./saga-modules/auth/saga";
import myProfileSaga from "./saga-modules/myProfile/saga";
/**
 * Root saga
 * @returns {IterableIterator<AllEffect | GenericAllEffect<any> | *>}
 */

export default function* rootSagas() {
  yield all([authSaga(), myProfileSaga()]);
}
