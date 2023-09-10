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
    yield put({type: 'FETCH_DATA_FAILURE', error});
  }
}

function* login(action: any) {
  try {
    console.log(action);

    yield put({type: 'LOGIN_SUCCESS', payload: action.payload});
  } catch (error) {
    yield put({type: 'LOGIN_FAILURE', error});
  }
}

function* signUp(action: any) {
  try {
    console.log('signUp saga fun');
    console.log(action.payload);
    yield put({type: 'SIGNUP_SUCCESS', payload: action.payload});
  } catch (error) {
    yield put({type: 'SIGNUP_FAILURE', error});
  }
}

const addtoCartSync = async (action: any) => {

  const data = {email: action.payload.email, items: action.payload.items};
  const cartItems = action.payload.cart;
  const emailToFind = action.payload.email;

  let flag = false;
  let index = 0;

  for(let i=0;i<cartItems.length;i++){
    if (action.payload.cart[i].email === emailToFind) {
      flag = true;
      index = i;
      // break;
    }
  }
  if (flag) {
    // existingObject.items.push(action.payload.items);
    cartItems[index].items.push(action.payload.items)
    return cartItems;
  } else {
    // If the email doesn't exist, create a new object and add the email and items
    const newObject = {
      email: action.payload.email,
      items: [action.payload.items],
    };
    cartItems.push(newObject);
    return cartItems;
  }
};

function* addToCart(action: any) {
  try {
    //@ts-ignore
    const res = yield call(addtoCartSync, action);
    yield put({type: 'ADD_TO_CART_SUCCESS', payload: res});
  } catch (error) {
    console.log(error);
  }
}

function* logout() {
  try {
    yield put({type: 'LOGOUT_SUCCESS', payload: false});
  } catch (error) {
    yield put({type: 'LOGOUT_FAILURE', error});
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
