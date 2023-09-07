// types.ts

export interface User {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
  gender: string;
}

export interface AuthState {
  users: User[];
  currentUser: User | null;
  error: string | null;
  isAuthenticated: boolean,
}

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export interface SignUpRequestAction {
  type: typeof SIGN_UP_REQUEST;
  payload: {user: User};
}

interface SignUpSuccessAction {
  type: typeof SIGN_UP_SUCCESS;
  payload: {
    user: User;
  };
}

interface SignUpFailureAction {
  type: typeof SIGN_UP_FAILURE;
  payload: {
    error: string;
  };
}

export interface LoginRequestAction {
  type: typeof LOGIN_REQUEST;
  payload: {email: string; password: string};
}

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: {user: User};
}

export interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: {error: string};
}

export interface LogoutRequestAction {
  type: typeof LOGOUT_REQUEST;
}

export interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

export type AuthActionTypes =
  | SignUpRequestAction
  | SignUpSuccessAction
  | SignUpFailureAction
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutRequestAction 
  | LogoutSuccessAction;



// authTypes.ts

// export const LOGIN_REQUEST = 'LOGIN_REQUEST';
// export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// export const LOGIN_FAILURE = 'LOGIN_FAILURE';

// export const SIGNUP_REQUEST = 'SIGNUP_REQUEST';
// export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
// export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

// export interface User {
//   id: string;
//   name: string;
//   phoneNumber: string;
//   email: string;
//   password: string;
//   gender: 'male' | 'female';
// }

// export interface AuthState {
//   users: User[];
//   currentUser: User | null;
//   loading: boolean;
//   error: string | null;
// }
