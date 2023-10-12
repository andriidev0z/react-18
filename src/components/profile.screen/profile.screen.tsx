import React from "react";
import { useAuthData } from "../../modules/auth/hooks/useAuthData";
import { useDispatch } from "react-redux";
import { setAuthData } from "../../modules/auth/redux/auth.slice";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const { name } = useAuthData();
  const logoutHandler = () => {
    const authData = {
      name: "",
      isLoggedIn: false,
      authToken: "",
    }
    dispatch(setAuthData(authData));
  }
  return (
    <div>
      <div>Hi, {name}.</div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  )
}

export default ProfileScreen;