import { takeEvery } from "redux-saga/effects";
import * as Actions from "./constants";

/**
 * get transfer log
 * @returns {IterableIterator<*>}
 */
function* updateMyProfileEffectSaga({ dataUpdate, reloadUpdate }) {}

export default function* myProfileSaga() {
  yield takeEvery(Actions.UPDATE_PROFILE, updateMyProfileEffectSaga);
}
