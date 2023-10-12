import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RoutesConfig } from "../../navigation";
import { useAuthData } from "../../modules/auth/hooks/useAuthData";

const HomeScreen = () => {
  const { isLoggedIn } = useAuthData();
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate(RoutesConfig.auth);
  }
  return (
    <div>
      <h4>Welcome maildroppa</h4>
      <div>
        {isLoggedIn && <Link to={RoutesConfig.profile}>My profile</Link>}
        {!isLoggedIn && <button onClick={loginHandler}>Login</button>}
      </div>
    </div>
  )
}

export default HomeScreen;