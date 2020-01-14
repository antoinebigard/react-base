import { Auth } from "aws-amplify";

export const types = {
  FETCH_USER_REQUEST: "FETCH_USER_REQUEST",
  FETCH_USER_SUCCESS: "FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE: "FETCH_USER_FAILURE",
};

export const fetchUserRequest = () => ({
  type: types.FETCH_USER_REQUEST,
});

export const fetchUserSuccess = user => ({
  type: types.FETCH_USER_SUCCESS,
  user,
});

export const fetchUserFailure = error => ({
  type: types.FETCH_USER_FAILURE,
  error,
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUserRequest());
    async function fetchData() {
      try {
        await sleep(2000); // Test
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1", {
          method: "GET",
        });
        const user = await response.json();
        dispatch(fetchUserSuccess(user));
      } catch (e) {
        dispatch(fetchUserFailure(e.message || "Unexpected error"));
      }
    }
    fetchData();
  };
};

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
