// authSagas.ts

import {call, put, takeLatest, all} from 'redux-saga/effects';
import {
  signUpSuccess,
  signUpFailure,
  loginSuccess,
  loginFailure,
  logoutSuccess
} from '../actions/authActions';
import {User, SIGN_UP_REQUEST, LOGIN_REQUEST, LOGOUT_REQUEST } from '../types/authTypes';


const signUpAPI = async (user: User) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('sign up Api saga');
  console.log(user);

  return {...user}; 
};

const loginAPI = async (email: string, password: string) => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  console.log("LOGIN API");
  console.log(users);

  const user = users.find(u => u.email === email && u.password === password);
  console.log("user in authSagas");
  console.log(user);
  console.log('Users:', users);

  
  if (user) {
    return {...user};
  } else {
    throw new Error('Login failed. Invalid email or password.');
  }
};

function* signUp(action: any) {
  try {
    //@ts-ignore
    const response = yield call(signUpAPI, action.payload.user);
    users.push(response);
    yield put(signUpSuccess(response));
  } catch (error) {
    yield put(signUpFailure('Sign-up failed. Please try again.'));
  }
}

function* login(action: any) {
  try {

    console.log("login action user is called : ");
    console.log(action);

    const {email, password} = action.payload;
    //@ts-ignore
    const user = yield call(loginAPI, email, password);

    console.log("login succes user is called : ");
    console.log(user);
    

    yield put(loginSuccess(user));
  } catch (error) {
    //@ts-ignore
    yield put(loginFailure(error.message));
  }
}

function* logout() {
  yield put(logoutSuccess());
}

export function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}
export function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

const users: User[] = [];


// authSagas.ts

// import { takeLatest, call, put } from 'redux-saga/effects';
// import {
//     loginSuccess,
//     loginFailure,
//     signUpSuccess,
//     signUpFailure,
//    } from '../actions/authActions'
// import { LOGIN_REQUEST, SIGNUP_REQUEST } from '../types/authTypes';   
// import { User } from '../types/authTypes';

// // Simulated user data (initially empty)
// let users: User[] = [];

// // Simulated API call for login
// const apiLogin = (email: string, password: string) => {
//   return new Promise<User | null>((resolve) => {
//     const user = users.find((u) => u.email === email && u.password === password);
//     setTimeout(() => {
//       resolve(user || null);
//     }, 1000); // Simulate a delay
//   });
// };

// // Simulated API call for sign-up
// const apiSignUp = (user: User) => {
//   return new Promise<boolean>((resolve) => {
//     // Check if the email already exists
//     const emailExists = users.some((u) => u.email === user.email);

//     if (emailExists) {
//       // Email already exists; registration fails
//       resolve(false);
//     } else {
//       // Email doesn't exist; register the user
//       users.push(user);
//       resolve(true);
//     }
//   });
// };

// function* handleLoginRequest(action: any) {
//   try {
//     const { email, password } = action.payload;
//     //@ts-ignore
//     const user = yield call(apiLogin, email, password);

//     if (user) {
//       yield put(loginSuccess(user));
//     } else {
//       yield put(loginFailure('Incorrect email or password'));
//     }
//   } catch (error) {
//     yield put(loginFailure('An error occurred during login'));
//   }
// }

// function* handleSignUpRequest(action: any) {
//   try {
//     //@ts-ignore
//     const signUpSuccess = yield call(apiSignUp, action.payload);

//     if (signUpSuccess) {
//       yield put(signUpSuccess());
//     } else {
//       yield put(signUpFailure('Email is already registered.'));
//     }
//   } catch (error) {
//     yield put(signUpFailure('An error occurred during sign-up'));
//   }
// }

// export function* watchLogin() {
//   yield takeLatest(LOGIN_REQUEST, handleLoginRequest);
// }

// export function* watchSignUp() {
//   yield takeLatest(SIGNUP_REQUEST, handleSignUpRequest);
// }
