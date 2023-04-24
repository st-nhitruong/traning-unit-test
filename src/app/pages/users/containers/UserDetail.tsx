import React, { useEffect, useState } from "react";
import { useSelector, RootStateOrAny, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserDetail } from "../user.actions";

const UserDetail = () => {
  const { infoUserDetail, isLoading, hasError } = useSelector(
    (state: RootStateOrAny) => state.userReducer
  );
  const dispatch = useDispatch();

  const { id } = useParams();
  const [infoUser, setInfoUser] = useState<any>();

  useEffect(() => {
    dispatch(getUserDetail(id));
  }, [id]);

  useEffect(() => {
    setInfoUser(infoUserDetail);
  }, [infoUserDetail]);

  return (
    <>
      {isLoading ? (
        <p data-testid="loading">Loading .... </p>
      ) : (
        <div>
          <h2 className="txt-left txt-bold">User Info</h2>
          {infoUser ? (
            <div data-testid="user-detail">
              <p>
                <span>User Name: </span>
                {infoUser.username}
              </p>
              <p>
                <span>Email: </span>
                {infoUser.email}
              </p>
              <p>
                <span>Phone: </span>
                {infoUser.phone}
              </p>
              <p>
                <span>Address: </span>
                {`${infoUser.address.suite} ${infoUser.address.street} ${infoUser.address.city}`}
              </p>
            </div>
          ) : (
            <p>List User is empty</p>
          )}
          {hasError ? (
            <p data-testid="error" role="alert">
              Oops, failed to fetch!
            </p>
          ) : null}
        </div>
      )}
    </>
  );
};

export default UserDetail;
