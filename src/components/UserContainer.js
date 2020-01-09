import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "../redux/TestAsync/actions";

const UserContainer = () => {
  const { user, isLoading } = useSelector(state => state.user);
  const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(fetchUsers());
  //   });

  return (
    <div>
      <div>{user ? user.name : "Unknow"}</div>
      {isLoading && <div>loading...</div>}
      <button onClick={() => dispatch(fetchUsers())}>Get User</button>
    </div>
  );
};

export default UserContainer;
