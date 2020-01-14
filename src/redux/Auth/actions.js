import { Auth } from "aws-amplify";

export const types = {
  FETCH_USER_REQUEST: "auth/FETCH_USER_REQUEST",
  FETCH_USER_SUCCESS: "auth/FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE: "auth/FETCH_USER_FAILURE",
  SIGN_OUT: "auth/SIGN_OUT",
};

export const fetchUserRequest = () => ({
  type: types.FETCH_USER_REQUEST,
});

export const fetchUserSuccess = user => ({
  type: types.FETCH_USER_SUCCESS,
  user,
});

export const signOutUserSuccess = () => ({
  type: types.FETCH_USER_SUCCESS,
});

export const fetchUserFailure = error => ({
  type: types.FETCH_USER_FAILURE,
  error,
});

/* **** */

export const signIn = ({ username, password }) => {
  return async dispatch => {
    dispatch(fetchUserRequest());
    try {
      const user = await Auth.signIn(username, password);
      dispatch(fetchUserSuccess(user));
    } catch (e) {
      dispatch(fetchUserFailure(e.message || "Unexpected error"));
    }
  };
};

export const signOut = () => {
  return async dispatch => {
    dispatch(fetchUserRequest());
    try {
      await Auth.signOut();
      dispatch(signOutUserSuccess());
    } catch (e) {
      dispatch(fetchUserFailure(e.message || "Unexpected error"));
    }
  };
};
