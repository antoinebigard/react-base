import { Auth } from "aws-amplify";

export const types = {
  FETCH_USER_REQUEST: "auth/FETCH_USER_REQUEST",
  FETCH_USER_SUCCESS: "auth/FETCH_USER_SUCCESS",
  FETCH_USER_FAILURE: "auth/FETCH_USER_FAILURE",
  SIGN_OUT: "auth/SIGN_OUT",
  CHANGE_PASSWORD: "auth/CHANGE_PASSWORD",
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

export const signOutUserSuccess = () => ({
  type: types.FETCH_USER_SUCCESS,
});

export const changeUserPassword = user => ({
  type: types.CHANGE_PASSWORD,
  user,
});

/** ASYNC ACTIONS **/

export const signIn = ({ username, password }) => {
  return async dispatch => {
    dispatch(fetchUserRequest());

    try {
      const user = await Auth.signIn(username, password);
      if (user.challengeName === "SMS_MFA" || user.challengeName === "SOFTWARE_TOKEN_MFA") {
        /*// You need to get the code from the UI inputs
        // and then trigger the following function with a button click
        const code = getCodeFromUserInput();
        // If MFA is enabled, sign-in should be confirmed with the confirmation code
        const loggedUser = await Auth.confirmSignIn(
          user, // Return object from Auth.signIn()
          code, // Confirmation code
          mfaType // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
        );*/
      } else if (user.challengeName === "NEW_PASSWORD_REQUIRED") {
        dispatch(changeUserPassword(user));
      } else if (user.challengeName === "MFA_SETUP") {
        // This happens when the MFA method is TOTP
        // The user needs to setup the TOTP before using it
        // More info please check the Enabling MFA part
        Auth.setupTOTP(user);
      } else {
        // The user directly signs in
        dispatch(fetchUserSuccess(user));
      }
    } catch (err) {
      if (err.code === "UserNotConfirmedException") {
        // The error happens if the user didn't finish the confirmation step when signing up
        // In this case you need to resend the code and confirm the user
        // About how to resend the code and confirm the user, please check the signUp part
      } else if (err.code === "PasswordResetRequiredException") {
        // The error happens when the password is reset in the Cognito console
        // In this case you need to call forgotPassword to reset the password
        // Please check the Forgot Password part.
      } else if (err.code === "NotAuthorizedException") {
        // The error happens when the incorrect password is provided
      } else if (err.code === "UserNotFoundException") {
        // The error happens when the supplied username/email does not exist in the Cognito user pool
      } else {
        dispatch(fetchUserFailure(err.message || "Unexpected error"));
      }
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

export const changePassword = ({ username, newPassword }) => {
  return async dispatch => {
    try {
      /*const { requiredAttributes } = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
      // You need to get the new password and required attributes from the UI inputs
      // and then trigger the following function with a button click
      // For example, the email and phone_number are required attributes
      const { username, email, phone_number } = getInfoFromUserInput();
      const loggedUser = await Auth.completeNewPassword(
        user, // the Cognito User Object
        newPassword, // the new password
        // OPTIONAL, the required attributes
        {
          email,
          phone_number,
        }
      );*/
    } catch (e) {
      dispatch(fetchUserFailure(e.message || "Unexpected error"));
    }
  };
};
