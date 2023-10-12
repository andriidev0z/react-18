import React, { useEffect, useMemo } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

import { RoutesConfig } from "../../navigation";
import { useAuthData } from "../auth/hooks/useAuthData";

export function AuthenticatedRouteOutlet() {
  const navigate = useNavigate();
  const {isLoggedIn} = useAuthData();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(RoutesConfig.home);
    }
  }, [isLoggedIn]);

  if (!isLoggedIn) {
    return <Navigate to={RoutesConfig.home} />;
  }

  return <Outlet />;
}
