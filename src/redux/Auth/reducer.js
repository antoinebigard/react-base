import { types as actionsTypes } from "./actions";

const initialState = {
  isLoading: false,
  user: null,
  error: "",
  passwordResetRequired: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actionsTypes.FETCH_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.user,
        error: "",
      };
    case actionsTypes.FETCH_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: action.error,
      };
    case actionsTypes.CHANGE_PASSWORD:
      return {
        ...state,
        isLoading: false,
        user: action.user,
        passwordResetRequired: true,
      };
    case actionsTypes.SIGN_OUT:
      return {
        ...state,
        isLoading: false,
        user: null,
        error: "",
      };
    default:
      return state;
  }
};

export default reducer;
