import ACTION_TYPES from "@app/core/constants/types";

export const getUserList = () => ({
  type: ACTION_TYPES.GET_USER_LIST,
});

export const getUserListSuccess = (payload) => ({
  type: ACTION_TYPES.GET_USER_LIST_SUCCESS,
  payload,
});

export const getUserListError = (payload) => ({
  type: ACTION_TYPES.GET_USER_LIST_ERROR,
  payload,
});

export const getUserDetail = (id) => ({
  type: ACTION_TYPES.GET_USER_DETAIL,
  payload: { id },
});

export const getUserDetailSuccess = (payload) => ({
  type: ACTION_TYPES.GET_USER_DETAIL_SUCCESS,
  payload,
});

export const getUserDetailError = (payload) => ({
  type: ACTION_TYPES.GET_USER_DETAIL_ERROR,
  payload,
});
