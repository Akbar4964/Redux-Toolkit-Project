import React from "react";
import { Route, Routes } from "react-router-dom";
import { privetRoutes, publicRoutes } from "../routes";

function AppRoutes() {
  const userData = { token: "", isLogged: false };

  return (
    <Routes>
      {userData.isLogged && userData.token
        ? privetRoutes.map((el) => <Route path={el.path} element={el.page} />)
        : publicRoutes.map((el) => <Route path={el.path} element={el.page} />)}
    </Routes>
  );
}

export default AppRoutes;
