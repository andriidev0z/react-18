import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";


import { RoutesConfig } from "./routes.config";
import { AuthRoutesOutlet, AuthenticatedRouteOutlet } from "../modules/outlets";
import Loader from "../modules/loader";

/** Layouts **/
const AppLayout = lazy(() => import("../components/layout"));

/** Auth Screens **/
const AuthScreen = lazy(() => import("../components/auth"));

/** App Screens **/
const HomeScreen = lazy(() => import("../components/home.screen"));
const ProfileScreen = lazy(() => import("../components/profile.screen"));

export function ApplicationRouter() {
  return (
    <React.Suspense fallback={<Loader />}>
      <Routes>
        <Route path={""} element={<AppLayout />}>
          <Route index element={<HomeScreen />} />
          <Route element={<AuthenticatedRouteOutlet />}>
            <Route path={RoutesConfig.profile} element={<ProfileScreen />} />
          </Route>
        </Route>
      </Routes>

      <Routes>
        <Route path={RoutesConfig.auth}>
          <Route element={<AuthRoutesOutlet />}>
            <Route index element={<AuthScreen />} />
          </Route>
        </Route>
      </Routes>
    </React.Suspense>
  );
}
