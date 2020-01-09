import { types as actionsTypes } from "./actions";

export const AUTH_UNKNOWN = "AUTH_UNKNOWN";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";

const initialState = {
  isLoading: false,
  isError: false,
  user: null,
  error: null,
  isLoggedIn: AUTH_UNKNOWN,
  isConfirmed: AUTH_UNKNOWN,
  hasSignedUp: AUTH_UNKNOWN,
  hasSentCode: AUTH_UNKNOWN,
  hasChangedPassword: AUTH_UNKNOWN,
  passwordResetRequired: AUTH_UNKNOWN,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.INIT: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;
