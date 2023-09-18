import { Reducer } from 'react';

import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    SET_CURRENT,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS,
  } from '../Types';
  import { User } from './authContext';

  export interface State{
    user: User | null,
    token: string | null,
    currentUser: User | null,
    isUserAuthenticated: string | null,
    userLoading: boolean | null,
    error: string | null,
  }

  interface Action{
    type:
    | typeof REGISTER_SUCCESS
    | typeof REGISTER_FAIL
    | typeof USER_LOADED
    | typeof SET_CURRENT
    | typeof AUTH_ERROR
    | typeof LOGIN_SUCCESS
    | typeof LOGIN_FAIL
    | typeof LOGOUT
    | typeof CLEAR_ERRORS;
    payload?:any;
  }

  const authReducer:Reducer<State, Action> = (state, action) => {
    switch (action.type) {
      case USER_LOADED:
        return {
          ...state,
          isUserAuthenticated: true,
          userLoading: false,
          user: action.payload,
        };
      case REGISTER_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
          isUserAuthenticated: true,
          userLoading: false,
        };
      case LOGIN_SUCCESS:
        localStorage.setItem('token', action.payload.token);
        return {
          ...state,
          ...action.payload,
  
          isUserAuthenticated: true,
          userLoading: false,
        };
      case REGISTER_FAIL:
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
  
          isUserAuthenticated: false,
          userLoading: false,
          user: null,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
     
      default:
        throw new Error(`Unsupported type of: ${action.type}`);
    }
  };
  
  export default authReducer;
  