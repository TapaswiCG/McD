// authActions.ts

import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_REQUEST, 
  LOGOUT_SUCCESS,
  User,
} from '../types/authTypes';

export const signUpRequest = (user: User) => ({
  type: SIGN_UP_REQUEST,
  payload: {user},
});

export const signUpSuccess = (user: User) => ({
  type: SIGN_UP_SUCCESS,
  payload: {user},
});

export const signUpFailure = (error: string) => ({
  type: SIGN_UP_FAILURE,
  payload: {error},
});

export const loginRequest = (email: string, password: string) => ({
  type: LOGIN_REQUEST,
  payload: { email, password },
});

export const loginSuccess = (user: User) => ({
  type: LOGIN_SUCCESS,
  payload: user ,
});

export const loginFailure = (error: string) => ({
  type: LOGIN_FAILURE,
  payload:  error ,
});

export const logoutRequest = ()=> ({
  type: LOGOUT_REQUEST,
});

export const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

