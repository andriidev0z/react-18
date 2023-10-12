import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import { RoutesConfig } from "../../navigation";
import { useAuthData } from "../auth/hooks/useAuthData";

export function AuthRoutesOutlet() {
  const {isLoggedIn} = useAuthData();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(RoutesConfig.profile);
    }
  }, [isLoggedIn]);

  if (isLoggedIn) {
    return <Navigate to={RoutesConfig.profile} />;
  }

  return <Outlet />;
}
