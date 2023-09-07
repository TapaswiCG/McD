// authReducer.ts

import {
  AuthState,
  AuthActionTypes,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGIN_REQUEST,
} from '../types/authTypes';

const initialState: AuthState = {
  users: [],
  currentUser: null,
  error: null,
  isAuthenticated: false,
};

const authReducer = (
  state = initialState,
  action: AuthActionTypes,
): AuthState => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      console.log('Sign up success reducer');
      console.log(action.payload);
      return {
        ...state,
        //@ts-ignore
        users: [...state.users, action.payload.user],
        error: null,
      };
    case SIGN_UP_FAILURE:
    case LOGIN_FAILURE:
      console.log('Sign up failure reducer');
      console.log(action.payload);
      return {
        ...state,
        error: action.payload.error,
      };
    case LOGIN_SUCCESS:
      console.log('login Success reducer');
      console.log(action);
      return {
        ...state,
        currentUser: action.payload.user,
        isAuthenticated: true,
        error: null,
      };
    case LOGIN_REQUEST:
      console.log('login request reducer');
      return {
        ...state,
        error: null,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false, // Update authentication state upon logout
        // Clear any other user-related data or set it to default values
      };
    default:
      return state;
  }
};

export default authReducer;

// authReducers.ts

// import {
//   LOGIN_REQUEST,
//   LOGIN_SUCCESS,
//   LOGIN_FAILURE,
//   SIGNUP_REQUEST,
//   SIGNUP_SUCCESS,
//   SIGNUP_FAILURE,
//   AuthState,
// } from '../types/authTypes';

// const initialState: AuthState = {
//   users: [], // You can initialize this with actual user data if needed
//   currentUser: null,
//   loading: false,
//   error: null,
// };

// const authReducer = (state = initialState, action: any): AuthState => {
//   switch (action.type) {
//     case LOGIN_REQUEST:
//     case SIGNUP_REQUEST:
//       return { ...state, loading: true, error: null };

//     case LOGIN_SUCCESS:
//       return { ...state, loading: false, currentUser: action.payload, error: null };

//     case LOGIN_FAILURE:
//     case SIGNUP_FAILURE:
//       return { ...state, loading: false, error: action.payload };

//     case SIGNUP_SUCCESS:
//       return { ...state, loading: false, error: null };

//     default:
//       return state;
//   }
// };

// export default authReducer;
