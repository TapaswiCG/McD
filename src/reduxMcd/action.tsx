// src/redux/actions.js

export const loginRequest = (data:any) => ({
  type: 'LOGIN_REQUEST',
  payload: data
});

export const loginSuccess = (data: any) => ({
  type: 'LOGIN_SUCCESS',
  payload: data,
});

export const loginFailure = (error: any) => ({
  type: 'LOGIN_FAILURE',
  error,
});

export const signUpRequest = (data:any) => ({
  type: 'SIGNUP_REQUEST',
  payload: data,
});

export const signUpSuccess = (data: any) => ({
  type: 'SIGNUP_SUCCESS',
  payload: data,
});

export const signUpFailure = (error: any) => ({
  type: 'SIGNUP_FAILURE',
  error,
});

export const logoutRequest = () => ({
  type: 'LOGOUT_REQUEST',
});

export const logoutSuccess = (data: any) => ({
  type: 'LOGOUT_SUCCESS',
  payload: data,
});

export const logoutFailure = (error: any) => ({
  type: 'LOGOUT_FAILURE',
  error,
});

export const addToCartRequest = (email:any, items:any,cart:any) => ({
  type: 'ADD_TO_CART_REQUEST',
  payload: { email, items, cart },
});

export const addToCartSuccess = (email:any, items:any) => ({
  type: 'ADD_TO_CART_SUCCESS',
  payload: { email, items },
});

export const removeFromCartRequest = (email:any, items:any) => ({
  type: 'REMOVE_FROM_CART_REQUEST',
  payload: { email, items },
});

export const removeFromCartSuccess = (email:any, itemId:any) => ({
  type: 'REMOVE_FROM_CART_SUCCESS',
  payload: { email, itemId },
});