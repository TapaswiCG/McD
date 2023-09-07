// src/redux/sagas.js
import {call, delay, put, race, takeEvery} from 'redux-saga/effects';
// import axios from 'axios';
import {all} from 'redux-saga/effects';

function* fetchData() {
  try {
    //'https://api.dictionaryapi.dev/api/v2/entries/en/'+item;
    // const response = yield call(axios.get, 'https://api.dictionaryapi.dev/api/v2/entries/en/car');
    // yield put({ type: 'FETCH_DATA_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_DATA_FAILURE', error });
  }
}

function* login(action:any) {
  try {
    console.log(action);
    
    yield put({ type: 'LOGIN_SUCCESS', payload: action.payload });
  } catch (error) {
    yield put({ type: 'LOGIN_FAILURE', error });
  }
}

function* signUp(action:any) {
  try {
    console.log("signUp saga fun");
    console.log(action.payload);
    yield put({ type: 'SIGNUP_SUCCESS', payload: action.payload });
  } catch (error) {
    yield put({ type: 'SIGNUP_FAILURE', error });
  }
}

function* addToCart(action:any) {
  try {
    console.log("add to cart saga fun");
    console.log(action.payload);
    yield put({ type: 'ADD_TO_CART_SUCCESS', payload: action.payload });
  } catch (error) {
    // yield put({ type: 'SIGNUP_FAILURE', error });
  }
}

function* logout() {
  try {
    yield put({ type: 'LOGOUT_SUCCESS', payload: false });
  } catch (error) {
    yield put({ type: 'LOGOUT_FAILURE', error });
  }
}

function* watchFetchData() {
  yield takeEvery('FETCH_DATA_REQUEST', fetchData);
  yield takeEvery('LOGIN_REQUEST', login);
  yield takeEvery('SIGNUP_REQUEST', signUp);
  yield takeEvery('LOGOUT_REQUEST', logout);
  yield takeEvery('ADD_TO_CART_REQUEST', addToCart);
}

// Root saga
export default function* rootSaga() {
  // yield [
  //   watchFetchData(),
  //   // Add other sagas here
  // ];
  yield all([watchFetchData()]);
}
