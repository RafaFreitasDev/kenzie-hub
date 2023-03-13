import React from "react";
import { Route, Routes } from "react-router-dom";
import { Register } from "../pages/Register/Register";
import { Login } from "../pages/Login/Login";
import { DashBoard } from "../pages/DashBoard/DashBoad";
import { ProtectedRoutes } from "../pages/ProtectedRoutes/ProtectedRoutes";
import { TechProvider } from "../providers/TechContext";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Register />} />

      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={
            <TechProvider>
              <DashBoard />
            </TechProvider>
          }
        />
      </Route>
    </Routes>
  );
}
