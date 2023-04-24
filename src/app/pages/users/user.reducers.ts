import { createReducer } from "@app/core/helpers/reducer-factory";
import ACTION_TYPES from "@core/constants/types";

const initialState = {
  isLoading: false,
  hasError: false,
  userList: null,
  infoUserDetail: null,
  error: "",
};

const getUserList = (state) => ({
  ...state,
  isLoading: true,
});

const getUserListSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  userList: payload,
});

const getUserListError = (state, payload) => ({
  ...state,
  isLoading: false,
  hasError: true,
  error: payload,
});

const getUserDetail = (state) => ({
  ...state,
  isLoading: true,
});

const getUserDetailSuccess = (state, payload) => ({
  ...state,
  isLoading: false,
  infoUserDetail: payload,
});

const getUserDetailError = (state, payload) => ({
  ...state,
  isLoading: false,
  hasError: true,
  error: payload,
});

const strategies = {
  [ACTION_TYPES.GET_USER_LIST]: getUserList,
  [ACTION_TYPES.GET_USER_LIST_SUCCESS]: getUserListSuccess,
  [ACTION_TYPES.GET_USER_LIST_ERROR]: getUserListError,
  [ACTION_TYPES.GET_USER_DETAIL]: getUserDetail,
  [ACTION_TYPES.GET_USER_DETAIL_SUCCESS]: getUserDetailSuccess,
  [ACTION_TYPES.GET_USER_DETAIL_ERROR]: getUserDetailError,
  __default__: (state) => state,
};

const userReducer = createReducer(strategies, initialState);

export default userReducer;
