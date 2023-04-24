import { put, takeLatest } from "redux-saga/effects";
import ACTION_TYPES from "@core/constants/types";
import { ApiService } from "@app/core/services/api.service";
import {
  getUserListSuccess,
  getUserListError,
  getUserDetailSuccess,
  getUserDetailError,
} from "./user.actions";

const http = new ApiService();

export function* getUserList() {
  try {
    const res = yield http
      .get(["https://jsonplaceholder.typicode.com/users"])
      .then((res) => res);
    // handle successful response
    yield put(getUserListSuccess(res));
  } catch (error) {
    // handle error response
    yield put(getUserListError(error));
  }
}

export function* getUserDetail({ payload }) {
  try {
    const res = yield http
      .get([`https://jsonplaceholder.typicode.com/users/${payload.id}`])
      .then((res) => res);
    yield put(getUserDetailSuccess(res));
  } catch (error) {
    yield put(getUserDetailError(error));
  }
}

export function* watchUser() {
  yield takeLatest(ACTION_TYPES.GET_USER_LIST, getUserList);
  yield takeLatest(ACTION_TYPES.GET_USER_DETAIL, getUserDetail);
}
