import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setAuthData } from "../../modules/auth/redux/auth.slice";
import { useNavigate } from "react-router-dom";

const credential = {
  pwd: "Upwork!",
  authToken: "Akljfls89u89f3j!@kj2389u",
  name: "Andrii"
}
const AuthScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [password, setPassword] = useState<string | undefined>();
  const [error, setError] = useState<string | undefined>();
  const authHandler = () => {
    if (!password || password === "") {
      setError("Auth failed");
      return;
    }
    const { pwd, name, authToken } = credential;
    if (pwd !== password) {
      setError("Auth failed");
      return;
    }
    const authData = {
      name,
      isLoggedIn: true,
      authToken,
    };
    dispatch(setAuthData(authData));
  }
  return (
    <div>
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={authHandler}>Login</button>
      {error && <span>{error}</span>}
    </div>
  )
}

export default AuthScreen;