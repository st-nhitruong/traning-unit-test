import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector, RootStateOrAny } from "react-redux";
import { getUserList } from "../user.actions";

export const UserList = () => {
  const { userList, isLoading, hasError } = useSelector(
    (state: RootStateOrAny) => state.userReducer
  );
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    dispatch(getUserList());
  }, []);

  useEffect(() => {
    setUsers(userList);
  }, [userList]);

  return (
    <>
      {isLoading ? (
        <div data-testid="loading">Loading .... </div>
      ) : (
        <div data-testid="user-list">
          <h1 className="txt-left txt-bold">User List</h1>
          {users?.length ? (
            <ul>
              {users.map((item) => (
                <li key={item.id}>
                  <Link data-testid={`${item.id}`} to={`${item.id}`}>
                    {item.name}
                  </Link>
                  <button data-testid="btn-delete">Delete</button>
                </li>
              ))}
            </ul>
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

export default UserList;
