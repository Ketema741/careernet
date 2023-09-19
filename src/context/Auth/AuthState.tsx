import React, { useReducer, useEffect, FC } from 'react';
import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import AuthContext, { User } from './authContext';
import authReducer, { State } from './authReducer';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  SET_CURRENT,
  LOGIN_FAIL,
  LOGOUT,
} from '../Types';

interface Props {
  children: React.ReactNode
}

const AuthState: FC<Props> = ({ children }) => {
  const api_url = "https://careernet-api.vercel.app"

  const initialState: State = {
    user: null,
    token: localStorage.token,
    currentUser: null,
    isUserAuthenticated: null,
    userLoading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Register user
  const userRegister = async (formData: User, images: string[]) => {
    formData.userImage = images || [];
    ;

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(`${api_url}/api/users`, formData, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {

      if (err instanceof Error) {
        dispatch({
          type: REGISTER_FAIL,
          payload: err.message,
        });
      }
    }
  };

  const removeImage = async (public_id: string) => {
    const id_obj = {
      public_id: public_id,
    };

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(`${api_url}/api/users/image`, id_obj, config);
      console.log(res);
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.message,
        });
      }
    }
  };

  // login user
  type loginProps = {
    email: string,
    passowrd: string,
  }
  const userLogin = async (formData: loginProps) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };


    try {
      const res = await axios.post(`${api_url}/api/auth-user`, formData, config);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });


      loadUser();
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: LOGIN_FAIL,
          payload: err.message,
        });

        console.log('error ', err.message);
      }
    }
  };

  // logout
  const logout = () => dispatch({ type: LOGOUT });

  // load user
  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    const res = await axios.get(`${api_url}/api/auth-user`);

    try {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
      });
    }
  };

  // set current
  const setCurrent = (user: User) => {
    dispatch({ type: SET_CURRENT, payload: user });
  };

  // set token on initial app loading
  setAuthToken(state.token);

  // load user on first run or refresh
  if (state.userLoading) {

    loadUser();
  }

  // 'watch' state.token and set headers and local storage on any change
  useEffect(() => {
    setAuthToken(state.token);
  }, [state.token]);

  // AuthState Provider Component
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        error: state.error,
        token: state.token,
        currentUser: state.currentUser,
        isUserAuthenticated: state.isUserAuthenticated,
        userLoading: state.userLoading,
        userRegister,
        setCurrent,
        userLogin,
        logout,
        loadUser,
        removeImage,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthState;
