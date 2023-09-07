// rootSaga.ts

import { all } from 'redux-saga/effects';
import { watchSignUp, watchLogin, watchLogout } from './authSagas';

export default function* rootSaga() {
  yield all([
    watchSignUp(),
    watchLogin(),
    watchLogout()
    // Add more sagas here if needed
  ]);
}
