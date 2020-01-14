import { types as actionsTypes } from "./actions";

const initialState = {
  isLoading: false,
  user: null,
  error: "",
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
    default:
      return state;
  }
};

export default reducer;
