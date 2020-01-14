import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { signOut } from "../../redux/Auth/actions";

const Profil = () => {
  const { user, isLoading } = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <div>{user ? user.username : "Unknow"}</div>
      {isLoading && <div>loading...</div>}
      <button onClick={() => dispatch(signOut())}>Signout</button>
    </div>
  );
};

export default Profil;
