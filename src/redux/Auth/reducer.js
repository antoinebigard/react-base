export const AUTH_UNKNOWN = "AUTH_UNKNOWN";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";

const initState = {
  isLoading: true,
  isError: false,
  user: null,
  error: null,
  isLoggedIn: states.AUTH_UNKNOWN,
  isConfirmed: states.AUTH_UNKNOWN,
  hasSignedUp: states.AUTH_UNKNOWN,
  hasSentCode: states.AUTH_UNKNOWN,
  hasChangedPassword: states.AUTH_UNKNOWN,
  passwordResetRequired: states.AUTH_UNKNOWN,
};
